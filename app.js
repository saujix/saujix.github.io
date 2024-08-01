
function boldRandChar(){
  let t = Math.round(Math.random() * 10);
  if (t > 6) {
    t = t - 4;
  }
  document.querySelector('#b1').style.fontWeight = '100';
  document.querySelector('#b2').style.fontWeight = '100';
  document.querySelector('#b3').style.fontWeight = '100';
  document.querySelector('#b4').style.fontWeight = '100';
  document.querySelector('#b5').style.fontWeight = '100';
  document.querySelector('#b6').style.fontWeight = '100';
  if (document.querySelector(`#b${t}`).style.fontWeight === null){

  } else {
    document.querySelector(`#b${t}`).style.fontWeight = '900';
  }
  
}


setInterval('boldRandChar()', 500)

function screensaver() {
  let t = Math.round(Math.random() * 10);
  document.querySelector('.screensaver').style.backgroundImage = `url('img/personal/screensaver/${t}.png')`;
}

screensaver();

setInterval('screensaver()', 60000);

currentState = localStorage.setItem('currentState','inactive');

document.querySelector('.image-container').addEventListener('click', function(event) {
  let t = event.target;
  let id = t.id;
  let screensaver = document.querySelector('.screensaver');
  let currentFilter = getComputedStyle(screensaver).filter;
  currentState = localStorage.getItem('currentState')

  function selectCurrent() {
    document.querySelector(`#${id}`).style.position = 'fixed';
    document.querySelector(`#${id}`).style.top = '25vh';
    document.querySelector(`#${id}`).style.left = '8vw';
    document.querySelector(`#${id}`).style.height = '50vh';
    applyBlur(); 
  }

  localStorage.setItem('currentState', 'active')
  

  function deselectAll() {
    document.querySelectorAll('.image').forEach(image => {
      image.style.position = 'initial';
      image.style.top = 'initial';
      image.style.left = 'initial';
      image.style.width = 'initial';
      image.style.height = 'initial';
    

      localStorage.setItem('currentState', 'inactive')
      removeBlur();
    });
    
  }

  function applyBlur() {
    screensaver.style.filter = 'blur(10px)';
  }

  function removeBlur() {
    screensaver.style.filter = 'blur(0px)'; 
  }

  console.log(currentState)


  


  if (document.querySelector(`#${id}`).style.top === '25vh' ){
    deselectAll();
    var min = new Audio("sounds/min.mp3")
    min.play();   
    
  } else {
    var max = new Audio("sounds/max.mp3")
    max.play();
    deselectAll();
    selectCurrent();

  }
  
});

loop('Dehradun')

function loop(word){
  let t = word.split('')
  t.forEach(function(value){
    
  })
  }
function enterAudio() {
  var scroll = new Audio("sounds/scroll.mp3");
  scroll.play();
  console.log(!max.paused)
}




