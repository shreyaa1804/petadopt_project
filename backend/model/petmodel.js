const {Schema,model}= require('mongoose');
 const petSchema = new Schema({
    name: { type:String, required:true},
    breed:{type:String},
    type:{type:String},
    color:{type:String},
    age:{type:Number},
    contact:{type:Number},
   //  price:{type:Number, default:'unknown'},
    image:{type:String},
    createdAt:{type:Date, default:Date.now}
 })
 
 module.exports= model('pet',petSchema); 
