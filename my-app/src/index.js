import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './App';
import wip from './wip.png';
import harry from './images/harry.png';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  
  <div className='wip'>
    <img src={wip} alt=''></img>
   <h2>Work in progress</h2>
  </div>


  <div className='container'>
    <div className='contact'>
      <div className='links'>
        <a href='https://www.instagram.com/akshat.pasbola/'>____|_INSTAGRAM_</a>
        <a href='https://www.instagram.com/akshat.pasbola/'>|_GITHUB_|</a>
        <a href='https://www.linkedin.com/in/akshatpasbola/'>_LINKEDIN_|____</a>
      </div>
      

      <a href=''></a>
      <a href=''></a>
    </div>
    <div className='box'>
      <Box />
    </div>
    <div className='bottomRight'>
      <img src={harry} height="200px"></img>
    </div>
  </div>


  </>
);

