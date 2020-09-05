import React from 'react'
import { useHistory } from 'react-router-dom'





function Home() {
    const history = useHistory()
    return (
        <section  className=" container-fluid  h-100 " >
          
           <div style={{marginTop:'10vh'}} className="container-fluid  bg-white p-5 shadow">
                <center>
                <button className="btn btn-secondary m-1 " onClick={()=>{history.push('/addItem')}}>
                   <b className="display-5"> Add Item To Your List </b>  
                </button>
                <br/>
                <button className="btn btn-secondary m-1 display-2 text-white" onClick={()=>{history.push('/list')}}>
                <b className="display-5">  Check your List </b>
                </button>
            </center>
           
           </div>
       </section>
    )
}

export default Home
