'use strict';
// <==================================element toggle function==================================>
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


// <==================================header sticky & go to top==================================>
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


// <==================================navbar toggle==================================>
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});


// <==================================Contact Form==================================>
const scriptURL = "https://script.google.com/macros/s/AKfycbwCt9hE1tTEwbepsmbWyaZDXY5wCdXE1xK06QqbjxG3B1nP2n_ae6n71zMzgD1TY2CR/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent Successfully!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});


// <==================================Cursor==================================>
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (t) {
  const posX = t.clientX;
  const posY = t.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });

});