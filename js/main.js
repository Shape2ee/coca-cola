"use strict";

const header = document.querySelector("header");
const cocaColaCan = document.querySelector(".since__can");

// console.dir(purpose)
let beforeScroll = 0;

const headerMove = () => {
  if(cocaColaCan.offsetTop - 100 < window.scrollY ) {
    header.classList.add("top")
  } else {
    header.classList.remove("top")
  }
}

window.addEventListener('scroll', headerMove)

const scrollUpDown = () => {
  if(cocaColaCan.offsetTop - 100 < window.scrollY){
    header.classList.add("hide")
    
    if(beforeScroll > window.scrollY) {
      header.classList.remove("hide")
    }
  }
	beforeScroll = window.scrollY;
};

window.addEventListener("scroll", scrollUpDown);

/*------------ mobile menu -----------*/

const menuBtn = document.querySelector(".header__mobile-btn");
const gnb = document.querySelector(".header__gnb");

menuBtn.addEventListener("click", () => {
  gnb.classList.toggle("show");
});