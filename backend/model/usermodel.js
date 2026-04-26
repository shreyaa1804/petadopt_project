 const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String },
  password: { type: String, required: true },

  otp: { type: String },
  otpExpiry: { type: Date },

  isVerified: {
    type: Boolean,
    default: false
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", adoptionSchema);
 
 // const mongoose=require("mongoose");
// const {Schema,model}= require('../connection');
//  const adoptionSchema = new Schema({
//     name:{ type:String, required:true},
//     email:{type:String, required:true},
//    // contact:{type:Number,required:true},
//    //  address:{type:String, default:'unknown'},
//     password:String,
//     createdAt:{type:Date, default:Date.now}
//  })
 
//  module.exports= model('user',adoptionSchema); 
// const { Schema, model } = require('../connection');
// const  mongoose } = require("mongoose");
// const adoptionSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   contact: { type: String},
//   password: { type: String, required: true },

//   // ✅ OTP fields
//   otp: { type: String },
//   otpExpiry: { type: Date },

//   // ✅ verification flag
//   isVerified: {
//     type: Boolean,
//     default: false
//   },

//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = model('user', adoptionSchema);{