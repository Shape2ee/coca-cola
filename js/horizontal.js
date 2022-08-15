"use strict";

  const stickyBox = document.querySelector(".sticky");
  const container = document.querySelector(".sticky__container");
  const horizontal = document.querySelector(".sticky__horizontal");

  const calcHeight = (item) => {
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    // horizontal의 숨겨진 영역까지의 가로 크기(전체크기) - 브라우저 가로 크기 + 브라우저 높이
    return item.scrollWidth - clientWidth + clientHeight;
  }
  let conHt = stickyBox.style.height = `${calcHeight(horizontal)}px`;
  // console.log(conHt)

  window.addEventListener("scroll",  () => {
    // console.log('ho', horizontal.offsetTop); // 가장 가까운 포지션 기준으로 위치값 계산 0
    // console.log('st', container.offsetTop); // stick : scroll 기준. offset의 기준도 scroll. sticky 박스를 scroll 박스에 고정되는 지점에서 부터 다시 offsetTop의 값이 결정
    horizontal.style.transform = `translateX(-${container.offsetTop}px`;
  })
  