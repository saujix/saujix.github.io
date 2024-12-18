import '../css/Me.css';
import me from '../images/me.jpeg'

export default function Me(){
    document.querySelector('.data').innerHTML=`
    
    <div class="meBox">
       <div class="aboutData">
       
       <h1>Akshat Pasbola</h1>

        <img src=${me} width="300px" class="me"></img>

        <div class="aboutme">
        <h4>
        <h1>Currently In :</h1>TU Dublin, Grangegorman / 1st year
        </h4>
        

        <h4>
        <h1>Course :</h1> Computer Science (TU856)
        </h4>

        
        </div>
       
       </div>
        
    </div>
    
    <div></div>

    `;
}