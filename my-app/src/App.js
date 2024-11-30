import './App.css'
import logo from './logo.png';

function Box(){
  return(
  <>
        <button className='button photosButton'>
          Photos
        </button>
        <button className='button resumeButton'>
          Me
        </button>
        <button className='button eventsButton'>
          Events
        </button>
        <button className='button fun'>
          cmon
        </button>
  
  <div className='data'>
    <img className='logo' src={logo} alt=''></img>
  </div>
  </>
  
  )
}

export default Box;

