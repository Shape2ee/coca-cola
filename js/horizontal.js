"use strict";

  const stickyBox = document.querySelector(".sticky");
  const container = document.querySelector(".sticky__container");
  const horizontal = document.querySelector(".sticky__horizontal");

  const calcHeight = (item) => {
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    return item.scrollWidth - clientWidth + clientHeight;
  }
  let conHt = stickyBox.style.height = `${calcHeight(horizontal)}px`;


  window.addEventListener("scroll",  () => {
    horizontal.style.transform = `translateX(-${container.offsetTop}px`;
  })
  