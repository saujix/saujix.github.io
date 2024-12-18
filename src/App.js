import './css/App.css'
import logo from './images/logo.png';
import Photos from './pages/photos.js';
import Home from './pages/Home';
import Me from './pages/Me.js';

function Box(){
  return(
  <>
        <button className='button photosButton' onClick={Photos}>
          Photos
        </button>
        <button className='button resumeButton' onClick={Me} >
          Me
        </button>
        <button className='button eventsButton'>
          Events
        </button>
        <button className='button fun' onClick={Home}>
          Home
        </button>
  
  <div className='data'>
    <img className='logo' src={logo} alt=''></img>
  </div>
  </>
  
  )
}

export default Box;

