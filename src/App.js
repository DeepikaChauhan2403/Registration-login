
import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import RegisterationPge from './components/RegisterationPge';
import Login from './components/Loginpge';
import Profile from './components/Profile';
import LandingPage from './components/landingPge.js';
import "./App.css"

function App() {
          
return (

<div>


    
  

        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/create-account" element={<RegisterationPge />}/>
           <Route path="/login" element={ <Login />}/>
           <Route path="/profile" element={ <Profile />}/>
  </Routes> 
       
      </div>
   
  );
}

export default App;
