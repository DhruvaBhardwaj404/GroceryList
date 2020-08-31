import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import sendUpdate from './sendUpdate.js'


function Update() {
   const location =useLocation();
   console.log(location.state)
   const [name,setName]= useState(location.state.e.Name)
   const [quantity,setQuantity]=useState(location.state.e.Quantity)

   const submitHandler=async (e)=>{
    e.preventDefault()
    if(name.length>0 && quantity>0){
    const res=await sendUpdate(location.state.e._id,name,quantity);
    if(res){
       if(res==="success"){
          setMessage(
              <div className="alert alert-success">
                 Updated!!
             </div>
      )
    }
    else{
        setName('')
        setQunatity(0)
        setMessage(
            <div className="alert alert-danger">
               {res}
           </div>
        )
   }}}}

    return (
      <section>
         <form  onSubmit={submitHandler} className="container m-3 p-1 bg-dark form text-white">
          <center>
                <label htmlFor="Name"> Name   :</label>
                <input className="form-control w-50" type="text" name="Name" id="Name" minLength="3" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                 <br/>
                <label htmlFor="Quantity">Quantity   :</label>
                <input className="form-control w-25" type="Number" name="Quantity" id="Quantity" className="w-25" min="0" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
               <br/>
                <button type="submit" className="btn  btn-success" >Submit</button>
                </center>
         </form>
      </section>
    )
}



export default Update