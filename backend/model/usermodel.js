const {Schema,model}= require('../connection');
 const adoptionSchema = new Schema({
    name:{ type:String, required:true},
    email:{type:String, required:true},
   // contact:{type:Number,required:true},
   //  address:{type:String, default:'unknown'},
    password:String,
    createdAt:{type:Date, default:Date.now}
 })
 
 module.exports= model('user',adoptionSchema); 
