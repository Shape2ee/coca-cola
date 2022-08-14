"use strict";

gsap.registerPlugin(ScrollTrigger);

/*---------- section1 ----------*/

gsap.to(".since__logo",{
  yPercent: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".since",
    pin: true,   // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom 100%", // end after scrolling 500px beyond the start
    markers: true,
    scrub: 1
  },
});

gsap.to(".since__can",{
  rotate: 30,
  scrollTrigger: {
    trigger: ".since",
    pin: true,   // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom 100%", // end after scrolling 500px beyond the start
    markers: true,
    scrub: 1
  },
});

gsap.to(".since__txt",{
  yPercent: 600,
  scale: 10,
  scrollTrigger: {
    trigger: ".since",
    pin: true,   // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom 100%r", // end after scrolling 500px beyond the start
    markers: true,
    scrub: 1
  },
});

/*---------- section2 ----------*/
const purposeTitle = document.querySelectorAll(".purpose__txt");
console.log(purposeTitle);

const movingTitle = (xData) => {
  return {
    xPercent: xData,
    yPercent:100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".purpose",
      pin: true,
      start: "top top",
      end: "bottom center",
      markers: true,
      scrub: 1
    }
  }
}

gsap.from(purposeTitle[0],movingTitle(-100));
gsap.from(purposeTitle[1],movingTitle(-70));
gsap.from(purposeTitle[2],movingTitle(-40));
gsap.from(purposeTitle[3],movingTitle(-10));

gsap.to(".purpose__rotate", {
  rotation: 360,
  scrollTrigger: {
    trigger: ".purpose",
    pin: true,
    start: "top top",
    end: "bottom center",
    markers: true,
    scrub: 1
  },
});

/*---------- section3 ----------*/
gsap.from(".vision__title-stroke", {
  xPercent: 100,
  scrollTrigger: {
    trigger: ".vision",
    start: "-500px",
    end: "bottom 100%",
    markers: true,
    scrub: 1
  },
})

gsap.from(".vision__title-fill", {
  xPercent: 100,
  scrollTrigger: {
    trigger: ".vision",
    start: "-200px",
    end: "200px",
    markers: true,
    scrub: 1
  },
})

/*---------- section4 ----------*/

// const product = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".product__container",
//     scroller: ".product",
//     pin: true,
//     start: "top top",
//     end: " bottom bottom",
//     markers: true,
//     scrub: true
//   },
// })

// .to(".product__img", {
//   height: 0
// })

gsap.utils.toArray(".product__item").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: ".product__container",
    start: "top top", 
    // botto
    pin: true,
    pinSpacing: false,
  });
});
