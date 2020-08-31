import React, { useState, useEffect } from 'react'

import sendData from './sendData.js'

function AddGrocery() {
      const [name,setName]=useState('')
      const [quantity,setQunatity]=useState(1)
      const [message,setMessage]=useState((<div></div>))

    const submitHandler=async (e)=>{
        e.preventDefault()
        if(name.length>0 && quantity>0){
        const res=await sendData(name,quantity);
        if(res){
           if(res==="success"){
              setMessage(
                  <div className="alert alert-success">
                     Added!!!
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
     }
 }
 }
}
    

   

   
    return (
        <section>
            
            <form className=" container  w-75  form bg-dark p-3" onSubmit={submitHandler}>
           
            <div className=" bg-secondary text-white p-1 " >
              <center>
                <label htmlFor="Name"> Name   :</label>
                <input className="form-control w-50" type="text" name="Name" id="Name" minLength="3" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                 <br/>
                <label htmlFor="Quantity">Quantity   :</label>
                <input className="form-control w-25" type="Number" name="Quantity" id="Quantity" className="w-25" min="0" value={quantity} onChange={(e)=>{setQunatity(e.target.value)}}/>
                </center>
             </div> 
                <br/>
             <center>
             <button type='submit' className="form-control btn btn-success" >Add Items</button>
              <br/><br/>
              {message}
             </center>
        
            </form>
        </section>
          
    )
}




export default AddGrocery