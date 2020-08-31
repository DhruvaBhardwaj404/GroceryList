import '@babel/polyfill';
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import Main from './components/Main.jsx' ;
import './App.css'


class App extends Component {
  
  render() {
    return (
    
     <Router>  
        <div className="container-fluid">
          <Head /> 
          <Main />
          <Foot />  
        </div>  
     </Router>
    
    );
  }
}

export default App;