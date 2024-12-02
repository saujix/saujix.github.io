import './Me.css';
import me from './images/me.jpeg'

export default function Me(){
    document.querySelector('.data').innerHTML=`
    
    <div class="meBox">
       <div class="aboutData">
       
       <h1>Akshat Pasbola</h1>

        <img src=${me} width="300px"></img>

        <div class="aboutme">
        <h4>
        <h1>Currently In :</h1>TU Dublin, Grangegorman / 1st year
        </h4>
        

        <h4>
        <h1>Course :</h1> Computer Science
        </h4>

        <h6>
        Website made using React, fuck React btw.
        </h6>

        
        </div>
       
       </div>
        
    </div>
    
    <div></div>

    `;
}