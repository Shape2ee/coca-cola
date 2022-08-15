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
    end: "+=100%", // end after scrolling 500px beyond the start
    // markers: true,
    scrub: 1,
  },
});

const sinceTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".since",
    pin: true,
    start: "top top",
    end: "+=100%",
    // markers: true,
    scrub: 1,
    ease: "Power2.easeIn"
  },
})

sinceTimeline.to(".since__can", {rotate: 30,})
.to(".since__txt", {scale: 10, y:200})

// gsap.to(".since__can",{
//   rotate: 30,
//   y:100,
//   scrollTrigger: {
//     trigger: ".since",
//     pin: true,   // pin the trigger element while active
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     end: "bottom 100%", // end after scrolling 500px beyond the start
//     markers: true,
//     scrub: 1
//   },
// });

// gsap.to(".since__txt",{
//   yPercent: 800,
//   scale: 10,
//   scrollTrigger: {
//     trigger: ".since",
//     pin: true,   // pin the trigger element while active
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     end: "bottom 100%r", // end after scrolling 500px beyond the start
//     markers: true,
//     scrub: 1
//   },
// });

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
      end: "bottom top",
      // markers: true,
      scrub: 1,
      ease: Power2.easeOut,
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
    end: "bottom top",
    // markers: true,
    scrub: 1
  },
});

/*---------- section3 ----------*/
gsap.from(".vision__title-stroke", {
  xPercent: 100,
  scrollTrigger: {
    trigger: ".vision",
    start: "-500px",
    end: "200px",
    // markers: true,
    scrub: 1,
    ease: Power2.easeOut,
  },
})

gsap.from(".vision__title-fill", {
  xPercent: 100,
  scrollTrigger: {
    trigger: ".vision",
    start: "-200px",
    end: "200px",
    // markers: true,
    scrub: 1,
    ease: Power2.easeOut,
  },
})

/*---------- section4 ----------*/
gsap.utils.toArray(".product__list--img li").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "center center", 
    end: "+=150%",
    pin: true,
    markers: true,
    scrub: 1,
  });
});


let imgs = gsap.utils.toArray('.product__img');
let texts = gsap.utils.toArray('.product__list--text li');

/*
imgs.forEach((img, i) => {

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: img,
      pin: true,
      start: "center center",
      markers: true,
      // scroller: ".scroller",
      scrub: true,
      // toggleActions: "play none reverse none",
      // invalidateOnRefresh: true,     
    }
  })
  
  tl.to(img, { height: 0 });
})
*/

texts.forEach((text, i) => {

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      pin: true,
      start: "top center",
      // end: "+=200%",
      // markers: true,
      scrub: true,
      toggleActions: "play none reverse none",
      // ease: "Power2.easeIn"
    },
  })

  tl.to(text, { duration: 0.33, opacity: 1, y:"50%" })
  .to(text, { duration: 0.33, opacity: 0, y:"0" }, 0.66)
  ;
});

/*---------- section ----------*/
const bgList = document.querySelectorAll(".brand__move li")
const infoList = document.querySelectorAll(".brand__info li")
/*
gsap.to(bgList[0],{
  y: 0,
  scrollTrigger: {
    trigger: ".brand",
    pin: true,
    start: "top top",
    end: "bottom center",
    markers: true,
    scrub: 1
  }
});

gsap.to(bgList[1],{
  y: 0,
  delay: 0.25,
  scrollTrigger: {
    trigger: ".brand",
    pin: true,
    start: "top top",
    end: "bottom center",
    markers: true,
    scrub: 1,
  }
})
*/

const bgColorMove = gsap.timeline({
  scrollTrigger: {
    trigger: ".brand",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "+=100%",
    // markers: true,
    scrub: 1,
    ease: "Power2.easeOut"
  },
})

bgColorMove.to(bgList[0],{y: 0,})
  .to(bgList[1],{y: 0,})
  .to(bgList[2],{y: 0,})
  .to(bgList[3],{y: 0,})
  .to(bgList[4],{y: 0,})
  .to(bgList[5],{y: 0,})
  .from(infoList[0], {yPercent: 500},2)
  .from(infoList[1], {yPercent: 500},2.25)
