import React from 'react'
import { Switch, Redirect ,Route} from 'react-router-dom'
import  {route}  from './route.js'

function Main() {
        return (
            
            <Switch>
                <Redirect exact from='/' to='/home' />
                {route.map((value)=><Route {...value} key={value.Component} />)}
            </Switch>
           
        )
    }


export default Main
