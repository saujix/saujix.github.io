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
    document.querySelector('.header').style.height='6vh';
    document.querySelector('.header').style.backdropFilter='blur(0px)';
    document.querySelector('.header').style.backgroundColor='transparent';
    document.querySelector('.nav').style.opacity='100';
    } else if (document.querySelector('.header').style.height < '8vh'){
      document.querySelector('.header').style.height='100vh';
      document.querySelector('.header').style.backdropFilter='blur(100px)';
      document.querySelector('.header').style.backgroundColor='pink';
      document.querySelector('.nav').style.opacity='0';

    }
}

function reduceCursor() {
  document.querySelector('#cursor-border').style.height = '5px' ;
  document.querySelector('#cursor-border').style.width = '5px' ;
  document.querySelector('#cursor-border').style.top = 'calc((200px) / -100)' ;
  document.querySelector('#cursor-border').style.left = 'calc((200px) / -100)' ;
  document.querySelector('#cursor-border').style.opacity = 0 ;


}

function defaultCursor() {
  document.querySelector('#cursor-border').style.height = '200px' ;
  document.querySelector('#cursor-border').style.width = '200px' ;
  document.querySelector('#cursor-border').style.top = 'calc((200px) / -2)' ;
  document.querySelector('#cursor-border').style.left = 'calc((200px) / -2)' ;
  document.querySelector('#cursor-border').style.opacity = 1 ;
}

function randomChar(){
  const chineseCharacters = ['人', '八', '入', '山', '大', '木', '禾', '小', '牛', '太', '天'];
  let t =  Math.round(Math.random()*10);
  document.querySelector('.hover-bold').innerHTML = chineseCharacters[t];
  document.querySelector('.hover-bold').style.fontSize ='50px';
}

function removeCursor(){
  document.querySelector('#cursor').style.opacity='0';
}

function restoreCursor(){
  document.querySelector('#cursor').style.opacity='1';
}
