//server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
const mongooose= require('mongoose');
const {getData,updateItem,deleteItem,addItem} = require('../src/UserQueries/UserQueries.js')


//============== DB connection================//

const DB=process.env.DB;
try{ 
   mongooose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('Connected to Database'); 
}
catch(err){
    console.log('Error occurred while connecting to Database =>',err);
}

//++++++++++++++++++++++++++++++++++++++++++++++//



//===============webpack dev server=========//
const webpack=require('webpack');
const middleware=require('webpack-dev-middleware');
const config=require('./../../../webpack.config');
const compiler=webpack(config);
app.use(middleware(compiler));
//++++++++++++++++++++++++++++++++++++++++++//
app.use(bodyParser())
app.use(express.static(path.join(__dirname, '../../../build')));



//==========================routes=============================//

app.post("/addItem",async (req,res)=>{
      const result=await addItem(req.body.item)
      if(result){
        console.log(result)
        res.send({message:result})
      }
      else{
        res.status(400)
        res.send()
      }
})

app.post("/getData",async (req,res)=>{
  const items=await getData()
  if(items!==false){
     res.send(JSON.stringify({items}))
  }
  else{
    res.status(400)
    res.send()
  }
})

app.put("/updateItem",async (req,res)=>{
  const result=await updateItem(req.body.item)
  if(result){
    console.log(result)
    res.send({message:result})
  }
  else{
    res.status(400)
    res.send()
  }
})



app.delete("deleteItem",(req,res)=>{

})


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




  
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
  });
  

app.listen('8000',()=>{
    console.log("server on port 8000");
})



