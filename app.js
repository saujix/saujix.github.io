
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);

  });

function isHeightok() {
  if (document.querySelector('.header').style.height === '100vh'){
    document.querySelector('.header').style.height='1vh';
    document.querySelector('.header').style.backdropFilter='blur(0px)';
    document.querySelector('.header').style.backgroundColor='transparent';
    document.querySelector('.nav').style.opacity='100';
    document.queerySelector('.topic2').style.opacity=1;
    document.querySelector('.topic2').style.zIndex=999999999;

    } else if (document.querySelector('.header').style.height < '8vh'){
      document.querySelector('.header').style.height='100vh';
      document.querySelector('.header').style.backdropFilter='blur(100px)';
      document.querySelector('.header').style.backgroundColor='pink';
      document.querySelector('.nav').style.opacity='0';
      document.queerySelector('.topic2').style.opacity=0;
      document.querySelector('.topic2').style.zIndex=0;
    }
}

function removeCursorBackground() {
  document.querySelector('#cursor-border').style.height = '5px' ;
  document.querySelector('#cursor-border').style.width = '5px' ;
  document.querySelector('#cursor-border').style.top = 'calc((200px) / -100)' ;
  document.querySelector('#cursor-border').style.left = 'calc((200px) / -100)' ;
  document.querySelector('#cursor-border').style.opacity = '0' ;


}

function restoreCursorBackground() {
  document.querySelector('#cursor-border').style.height = '200px' ;
  document.querySelector('#cursor-border').style.width = '200px' ;
  document.querySelector('#cursor-border').style.top = 'calc((200px) / -2)' ;
  document.querySelector('#cursor-border').style.left = 'calc((200px) / -2)' ;
  document.querySelector('#cursor-border').style.opacity = '1' ;
}

function randomChar(){
  const chineseCharacters = ['人', '八', '入', '山', '大', '木', '禾', '小', '牛', '太', '天'];
  let t =  Math.round(Math.random()*10);
  document.querySelector('.hover-bold').innerHTML = chineseCharacters[t];
  document.querySelector('.hover-bold').style.fontSize ='50px';
}

function removePointer(){
  document.querySelector('#cursor').style.opacity='0';
}

function restorePointer(){
  document.querySelector('#cursor').style.opacity='1';
}

let t='';
document.querySelector('.image-container').addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    if (getComputedStyle(document.querySelector(`#${event.target.id}`)).filter === 'invert(1)'){
      console.log('Clicked image class:', event.target.id);
      t = `#${event.target.id}`;
      document.querySelector(`#${event.target.id}`).style.filter = 'invert(0)';
      removeCursorBackground();
      restorePointer();
      blurBackground()

      
      document.querySelector('#cursor-border').style.opacity = '0';
    } else if (getComputedStyle(document.querySelector(`#${event.target.id}`)).filter === 'invert(0)'){
      console.log('Clicked image class:', event.target.id);
      t = `#${event.target.id}`;
      clickedOn = `#${event.target.id}`;
      document.querySelector(`#${event.target.id}`).style.filter = 'invert(1)';
      
      removePointer();
      restoreCursorBackground();
      document.querySelector('#cursor-border').style.opacity = '1';
      blurBackground();
    }
      

  } else {
  }
}
)




function restoreInvert(){
  if (t === ''){
  
  } else {
    document.querySelector(t).style.filter = 'invert(1)';
  }
  
}

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
  document.querySelector(`#b${t}`).style.fontWeight = '900';
}


setInterval('boldRandChar()', 500)

function screensaver() {
  let t = Math.round(Math.random() * 10);
  document.querySelector('.screensaver').style.backgroundImage = `url('img/personal/screensaver/${t}.png')`;
}

screensaver();

setInterval('screensaver()', 60000);


function blurBackground() {
  let screensaver = document.querySelector('.screensaver');
  let currentFilter = getComputedStyle(screensaver).filter;

  if (currentFilter === 'blur(20px)') {
    screensaver.style.filter = 'blur(0px)';
  } else {
    screensaver.style.filter = 'blur(20px)';
  }
}

function blurBackground_oneway(){
  let screensaver = document.querySelector('.screensaver');
  let currentFilter = getComputedStyle(screensaver).filter;

  if (currentFilter === 'blur(20px)') {
    screensaver.style.filter = 'blur(0px)';
  } else {
  }
}

function centerEverythingVertically(){
  console.log(`hi there ${t}`)

  document.querySelector(`${t}`).style.position = 'absolute';
  document.querySelector(`${t}`).style.top = '100px';
  document.querySelector(`${t}`).style.right = '100px';

  console.log('changed')
}

