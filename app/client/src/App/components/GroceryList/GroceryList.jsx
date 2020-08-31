import React, { useState, useEffect } from 'react'
import getData from './getData.js'
import { useHistory } from 'react-router-dom';


function GroceryList() {
    const history = useHistory()
    const [data,setData]=useState((<div></div>))
    var Dat=[{Name:'Test',Quantity:2}],temp=[];
   
    const fetchData=async ()=>{
        Dat=await getData();
        //console.log(Dat)
        if(Dat){
        temp=await Dat.map((e,index)=>{
            return(
                
                <tr key={e._id}>
                   <td>{index+1}</td>
                   <td colSpan="3">{e.Name}</td>
                   <td colSpan='2'>{e.Quantity}</td>
                   <td colSpan='2'>
                   <button className="btn btn-primary m-1" onClick={()=>{history.push('/update',{e})}}>Update</button>
                   <button className="btn btn-danger m-1" onClick={()=>{history.push('/delete',{e})}}>Delete</button>
                   </td>
                </tr>
            )
        })
     setData(temp)
    }
}

   


    useEffect(()=>{
        fetchData()    
    },[])
 


    return (
      <section className="container w-75 bg-white">
         <table  className="table  table-striped border shadow p-1">
             <thead >
                 <tr className="p-1" key="0">
                     <th></th>
                      <th colSpan="3">Name</th>
                      <th colSpan="2">Quantity</th>
                      <th colSpan="3">Actions</th>
                 </tr>
             </thead>
             <tbody className="p-1 " >
                 {data}
             </tbody>

         </table>

      </ section>
    )
}



export default GroceryList