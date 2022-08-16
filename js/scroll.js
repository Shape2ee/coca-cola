"use strict";

gsap.registerPlugin(ScrollTrigger);

/*---------- section1 since ----------*/

gsap.to(".since__logo",{
  yPercent: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".since",
    start: "top top",
    end: "+=100%",
    // markers: true,
    scrub: 1,
  },
});

const sinceTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".since",
    start: "top top",
    end: "+=50%",
    // markers: true,
    scrub: 1,
    ease: "Power2.easeIn"
  },
})

sinceTimeline.to(".since__can", {rotate: 30, y: 50})
.to(".since__txt", {scale: 10, y:200})

/*---------- section2 purpose ----------*/

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

/*---------- section3 vision ----------*/

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

/*---------- section4 product ----------*/

gsap.utils.toArray(".product__list-img li").forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    start: "center center", 
    end: "+=150%",
    pin: true,
    // markers: true,
    scrub: 1,
    toggleActions: "none pause none none",
  });
});

let texts = gsap.utils.toArray('.product__list-text li');

texts.forEach((text, i) => {

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      pin: true,
      start: "top center",
      // end: "+=200%",
      // markers: true,
      scrub: 1,
      toggleActions: "play none reverse none",
      // ease: "Power2.easeIn"
    },
  })

  tl.to(text, { duration: 0.33, scale:1.2, opacity: 1, y:"50%" })
  .to(text, { duration: 0.33, scale:0.8, opacity: 0, y:"0" }, 0.66)
  ;
});

/*---------- section5 gallery ----------*/
gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery__wrap",
    start: "top top",
    // end: "+=200%",
    scrub: true,
    pin: ".gallery",
    // markers:true,
    anticipatePin: 1
  }
})

.set(".gallery__block:not(.gallery__block-center)", {autoAlpha: 0})
.to(".gallery__block:not(.gallery__block-center)", {duration: 0.1, autoAlpha: 1}, 0.001)
.from(".gallery__grid", {
  scale: 4,
  ease: "none",
})

/*---------- section6 brand ----------*/

const bgList = document.querySelectorAll(".brand__move li");
const infoList = document.querySelectorAll(".brand__info li");
const titleList = document.querySelectorAll(".brand__title .block");

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

bgColorMove.to(bgList[0],{duration: 0.33, y: 0,})
  .to(bgList[1],{duration: 0.33, y: 0,})
  .to(bgList[2],{duration: 0.33, y: 0,})
  .to(bgList[3],{duration: 0.33, y: 0,})
  .to(bgList[4],{duration: 0.33, y: 0,})
  .to(bgList[5],{duration: 0.33, y: 0,})
  .from(infoList[0], {yPercent: 500},2)
  .from(infoList[1], {yPercent: 500},2.25);

const moveRightTitle = (xData) => {
  return {
    xPercent: xData,
    yPercent:100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".brand",
      // pin: true,
      start: "top top",
      end: "center center",
      // markers: true,
      scrub: 1,
      ease: Power2.easeOut,
    }
  }
}

gsap.from(titleList[0],moveRightTitle(-100));
gsap.from(titleList[1],moveRightTitle(-70));
gsap.from(titleList[2],moveRightTitle(-40));
