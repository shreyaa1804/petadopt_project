const{Schema,model}=require("mongoose");
const cartSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    pet:{
        type:Schema.Types.ObjectId,
        ref:'pets',
        required:true
    }
},{timestamps:true});
module.exports=model('cart',cartSchema);