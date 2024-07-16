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


document.addEventListener('DOMContentLoaded', function() {
  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const scrollTo = (element, to, duration) => {
      const start = element.scrollTop;
      const change = to - start;
      let currentTime = 0;
      const increment = 20;

      const animateScroll = () => {
          currentTime += increment;
          const val = easeInOutQuad(currentTime / duration);
          element.scrollTop = start + change * val;
          if (currentTime < duration) {
              setTimeout(animateScroll, increment);
          }
      };

      animateScroll();
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              scrollTo(document.documentElement, target.offsetTop, 600);
          }
      });
  });
});



