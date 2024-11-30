import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './App';
import wip from './wip.png';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <div className='wip'>
    <img src={wip}></img>
   <h2>Work in progress</h2>
  </div>
  <div className='container'>
    <div className='box'>
      <Box />
    </div>
  </div>
  </>
);

