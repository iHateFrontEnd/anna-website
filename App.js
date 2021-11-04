import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import navbarIcon from './assests/navbar-icon.png';
import ramaImg from './assests/rama.jpg';

function App(){
  return(
    <div className="startup" id="startup">
      <div className="menu">
        <button className='menuBtn'><img src={navbarIcon} alt='' /></button>  
      </div>

      <div className="aboutMe" id="aboutMe">
        <h1>ABOUT</h1>
        <img className='ramaImg' src={ramaImg} alt="" />


      </div>

      &nbsp;
      <div>
        <h2>cod</h2>
      </div>
    </div>
  );
}

export default App;