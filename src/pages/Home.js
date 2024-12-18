import '../css/App.css'
import logo from '../images/logo.png';

export default function Home(){
    document.querySelector('.data').innerHTML = `<img className='logo' src=${logo} alt='' width="80%"></img>`
}