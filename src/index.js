import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Box from './App';
import wip from './images/wip.png';
import harry from './images/harry.png';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";


const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    }
  }
};

const particlesInit = async (main) => {
  await loadFull(main);
};

root.render(
  <>
  {/* Particles */}
  <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "#808080" } },
            fpsLimit: 100,
            particles: {
              color: { value: "#000000" },
              links: { enable: true, color: "red", distance: 150 },
              move: { enable: true, speed: 2 },
              number: { value: 20 },
              size: { value: { min: 0, max: 30 } },
            },
          }}
        />
    {/* /particles */}
  

  <div className='wip'>
    <img src={wip} alt=''></img>
   <h2>Work in progress</h2>
  </div>


  <div className='container'>
    <div className='contact'>
      <div className='links'>
        <a href='https://www.instagram.com/akshat.pasbola/'>____|_INSTAGRAM_</a>
        <a href='https://github.com/saujix'>|_GITHUB_|</a>
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

