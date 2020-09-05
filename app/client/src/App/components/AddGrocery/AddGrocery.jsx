import React, { useState, useEffect } from 'react'

import sendData from './sendData.js'
import { useHistory } from 'react-router-dom'

function AddGrocery() {
    const history = useHistory()
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
            <div className="cotainer bg-dark">
                <button className="btn text-white m-1" style={{backgroundColor:'purple'}} onClick={()=>{history.push('/home')}}>Home</button>
                <button className="btn text-white m-1 " style={{backgroundColor:'purple'}} onClick={()=>{history.push('/list')}}>Check List</button>
            </div>
            <br/>
            <div className="p-3">
            <form className=" container  w-75  form  p-3" onSubmit={submitHandler}>
           
            <div className=" text-white p-1 " style={{backgroundColor:"purple"}} >
              <center>
                <div className="form-control w-50 p-1 text-dark">
                    <label htmlFor="Name"> Name   :</label>
                    <input  type="text" name="Name" id="Name" minLength="3" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                 <br/>
                 <div className="form-control w-25 p-1">
                    <label htmlFor="Quantity">Quantity   :</label>
                    <input  type="Number" name="Quantity" id="Quantity" className="w-25" min="0" value={quantity} onChange={(e)=>{setQunatity(e.target.value)}}/>
                </div>
                </center>
             </div> 
                <br/>
             <center>
             <button type='submit' className="form-control btn btn-success" >Add Items</button>
              <br/><br/>
              {message}
             </center>
        
            </form>
            </div>
        </section>
          
    )
}




export default AddGrocery