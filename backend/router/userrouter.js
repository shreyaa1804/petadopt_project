const express = require("express");
const router = express.Router();
const Model = require("../model/usermodel");

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

router.get("/getbyid", (req, res) => {
  Model.findById()
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


module.exports = router;
