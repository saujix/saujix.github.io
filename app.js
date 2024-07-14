document.addEventListener('DOMContentLoaded', function() {
    var intro = document.querySelector('.intro');
    var offsetX = 75;
    var offsetY = 75;
    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;

    function updateIntroPosition() {
        var newX = mouseX - offsetX + window.pageXOffset;
        var newY = mouseY - offsetY + window.pageYOffset;

        intro.style.left = newX + 'px';
        intro.style.top = newY + 'px';

        requestAnimationFrame(updateIntroPosition);
    }

    updateIntroPosition();

    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    document.addEventListener('scroll', function() {
        var newX = mouseX - offsetX + window.pageXOffset;
        var newY = mouseY - offsetY + window.pageYOffset;

        intro.style.left = newX + 'px';
        intro.style.top = newY + 'px';
    });
});

const title = document.querySelector('.title');
let addIntervalId, removeIntervalId;
let index = 0;
const textToAdd = ' Pasbola';

title.addEventListener('mouseover', function() {
  clearInterval(removeIntervalId);
  index = 0;
  addIntervalId = setInterval(function() {
    if (index <= textToAdd.length) {
      title.textContent = 'Akshat' + textToAdd.substring(0, index);
      index++;
    } else {
      clearInterval(addIntervalId);
    }
  }, 200);
});

title.addEventListener('mouseout', function() {
  clearInterval(addIntervalId);
  index = textToAdd.length;
  removeIntervalId = setInterval(function() {
    if (index >= 0) {
      title.textContent = 'Akshat' + textToAdd.substring(0, index);
      index--;
    } else {
      clearInterval(removeIntervalId);
    }
  }, 200);
});


