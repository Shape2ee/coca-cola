"use strict";

const imgBox = document.querySelector(".since__img-box")
const logoImg = document.querySelector(".since__logo")
const colaImg = document.querySelector(".since__can");
const sinceText = document.querySelector(".since__txt");

const sinceInteraction = (scrollValue) => {
  // colaImg.style.transform = `translateY(${scrollValue}px)`

  console.log(scrollValue)
  let scrollTop = scrollValue * 10;
  let scrollRotate = scrollValue * 0.5;

  let imgRotate = scrollRotate;
  let opacity = 1;

  if(scrollValue < 20) {
    logoImg.style.opacity = opacity;
  } else if(scrollValue >= 20 || scrollValue <= 40 && logoImg.style.opacity !== 1) {
    logoImg.style.opacity = opacity - scrollValue * 0.02;
  }

  if(imgRotate < 20) {
    colaImg.style.transform = `translateY(${scrollTop}px) rotate(${imgRotate}deg)`;
  }

  if(scrollValue < 65) {
    sinceText.style.transform = `translateY(${scrollTop}px) scale(${1 + (scrollValue * 0.1)} )`
  }
  // return


}
window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY * 0.1;
  // let colaScale = 1;
  // console.log(scrollValue)
  sinceInteraction(scrollValue)
})
