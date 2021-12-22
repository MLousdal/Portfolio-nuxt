// Animations
import "animate.css";

const animateMe = document.querySelectorAll(".animateMe");

function checkPosition() {
  const windowHeight = window.innerHeight;
  animateMe.forEach(e => {
    let positionFromTop = e.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      e.classList.add('animate__animated', 'animate__fadeInUp');
    };
  });
};

window.addEventListener('scroll', checkPosition);