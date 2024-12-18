import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Box from './App';
import wip from './images/wip.png';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import {Howl} from 'howler';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));


// async for particles
const particlesInit = async (main) => {
  await loadFull(main);
};

// radio function
function Radio() {

  const [soundStatus, setSoundStatus] = useState(false);
  const [message, setMessage] = useState("Play");
  const sound = useRef(null);
  const songName = "Daft Punk - Something About Us.mp3";

  // Set up the Howl instance once when the component mounts
  useEffect(() => {
    if (!sound.current) {
      sound.current = new Howl({
        src: [`music/df/${songName}`],
        html5: true,
        loop: true,
        onend: function () {
          console.log('Finished!');
        },
        onpause: function () {
          console.log("paused");
        },
        volume: 1
      });
    }
  }, []);

  const toggleSound = () => {
    if (soundStatus) {
      sound.current.pause();
      setMessage("Resume");
    } else {
      sound.current.play();
      setMessage("Pause");
    }
    setSoundStatus(!soundStatus);
  };

  return (
    <>

    <div className='upper'>
      <div className='cover'>PEACE <br></br><br></br>🕊️</div>
    </div>

    <div className='body'>
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
      
      

      <div className='wip'>
        <img src={wip} alt='' />
        <h2>Work in progress</h2>
      </div>

      <div className='container'>
        <div className='contact'>
          <div className='links'>
            <a href='https://www.instagram.com/akshat.pasbola/'>____|_INSTAGRAM_</a>
            <a href='https://github.com/saujix'>|_GITHUB_|</a>
            <a href='https://www.linkedin.com/in/akshatpasbola/'>_LINKEDIN_|____</a>
          </div>
        </div>
        <div className='box'>
          <Box />
          <button onClick={toggleSound} className='button musicToggle'>{message}</button>
          <button onClick={toggleSound} className='button musicToggle'>{message}</button>
          <button className='button musicTogglered'></button>
          <button className='button musicTogglered'></button>
        </div>
      </div>
    </div>
  </>
  );
  
}

root.render(<Radio />);