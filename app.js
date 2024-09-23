['red','green','blue','purple','white','lightblue','blue'].forEach(element => {
  function colorChanger(){
    let cell = parseInt(sessionStorage.getItem('cell'), 10) || 0;  // Ensure cell starts from 0 if undefined

    if (cell < 20) {
      cell++;
      document.querySelector(`.x${cell}`).style.backgroundColor = element;
      sessionStorage.setItem('cell', `${cell}`);
      console.log(sessionStorage.getItem('cell')); // No need for second argument
    } else if (cell == 20) {
      cell = 1;
      sessionStorage.setItem('cell', `${cell}`);
      console.log(cell);
    }
  }
  
  setInterval(colorChanger, 500);
});