import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './App';
import wip from './wip.png';
import harry from './images/harry.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  
  <div className='wip'>
    <img src={wip} alt=''></img>
   <h2>Work in progress</h2>
  </div>


  <div className='container'>
    <div className='contact'>
      <a href='https://www.instagram.com/akshat.pasbola/'>hi</a>

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

