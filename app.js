

['red','green','blue','purple','white','lightblue','blue'].forEach(element => {
  function colorChanger(){
    
    let cell = parseInt(localStorage.getItem('cell'),10);
    // let color = Math.round(Math.random()*20)
  
    if (cell <20) {
      cell++;
        document.querySelector(`.x${cell}`).style.backgroundColor= element;
        localStorage.setItem('cell', `${cell}`)
        console.log(localStorage.getItem('cell', `${cell}`))
      } else if (cell == 20){
        cell = 1;
        localStorage.setItem('cell', `${cell}`)
        console.log(cell)
      }
  }
  
  setInterval(colorChanger,500)

  
});








