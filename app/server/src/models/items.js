const mongoose =require('mongoose');
const {Schema} =require('mongoose');

const items=new Schema({
    Name:String,
    Quantity:Number,
},{timestamps:true})

module.exports= mongoose.model('items',items,'items');