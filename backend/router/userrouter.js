const express = require("express");
const router = express.Router();
const Model = require("../model/usermodel");
const sendEmail=require("../utils/sendmail");

router.post("/adddetail", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getdetail", (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {

  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);

      res.status(500).json(err);
    });
});

router.put('/update/:id', (req,res)=>{
  Model.findByIdAndUpdate(req.params.id, req.body, {new:true} )
  .then((result) => {
      res.status(200).json(result);   
      
  }).catch((err) => {
      res.status(500).json(err);
      
  });
});

router.delete('/delete/:id',(req,res)=>{
  Model.findByIdAndDelete(req.params.id)
  .then((result) => {
      res.status(200).json(result);   
      
  }).catch((err) => {
      res.status(500).json(err);
      
  });

});
router.post("/verify-otp", async (req, res) => {
  const { userId, otp } = req.body;

  try {
    const user = await Model.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    res.status(200).json({ message: "Account verified successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");

router.post("/signup", async (req, res) => {
  try {
    // ✅ hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // ✅ generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const user = new Model({
      ...req.body,
      password: hashedPassword, // 🔐 store hashed password
      otp,
      otpExpiry: Date.now() + 5 * 60 * 1000
    });

    await user.save();

    // ✅ send OTP email
    await sendEmail(
      user.email,
      "OTP Verification",
      `Your OTP is ${otp}`
    );

    res.status(200).json({
      message: "User registered, OTP sent",
      userId: user._id
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const user = await Model.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: "Please verify your email first"
      });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // ✅ create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
