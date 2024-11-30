import './App.css'
import logo from './logo.png';
import Photos from './photos';
import Home from './Home';

function Box(){
  return(
  <>
        <button className='button photosButton' onClick={Photos}>
          Photos
        </button>
        <button className='button resumeButton' >
          Me
        </button>
        <button className='button eventsButton'>
          Events
        </button>
        <button className='button fun' onClick={Home}>
          home
        </button>
  
  <div className='data'>
    <img className='logo' src={logo} alt=''></img>
  </div>
  </>
  
  )
}

export default Box;

