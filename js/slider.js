const slider = document.getElementById("sliderjs");
let sliderContent = document.getElementsByClassName("slider-content");
let sliderContentLast = sliderContent[sliderContent.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderContentLast);

function Next() {
  let sliderContentFirst = document.querySelectorAll(".slider-content")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderContentFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderContent = document.querySelectorAll(".slider-content");
  let sliderContentLast = sliderContent[sliderContent.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderContentLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 5000);