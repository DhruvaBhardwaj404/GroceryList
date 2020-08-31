const mongoose = require('mongoose');
const items = require('../models/items.js');


async function getData(){
    try{
      const Data= await items.find({});
      return Data
    }
    catch(err){
        console.log("error while getting data",err)
        return false
    }
}

async function updateItem(item){
    try{
      if(await items.exists({_id:item._id})){
           items.updateOne({_id:item._id},{Name:item.Name,Quantity:item.Quantity})
          return {message:"success"}
        }
    }
    catch(err){
        console.log("error while updating item",err)
         return false
    }
}

async function deleteItem(item){
    try{
        if(await items.exists({_id:item._id})){
             items.findByIdAndDelete({_id:item_id})
            return true
          }
      }
      catch(err){
          console.log("error while deleting item",err)
           return false
      }
}

async function addItem(item){
    try{
        if(await items.exists({Name:item.Name})){
            return {message:"Exist!!!"}
          }
        else{
            items.create(item)
            return {message:"success"}
        }  
      }
      catch(err){
          console.log("error while deleting item",err)
           return false
      }
}
module.exports={getData,updateItem,deleteItem,addItem}

