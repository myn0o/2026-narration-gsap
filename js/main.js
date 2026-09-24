/** Import=================== */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,InertiaPlugin,SplitText);

/** Variables ===================  */


/** Fonctions =================  */


/** Animation =====================  */

/** Block1 ========= */
gsap.fromTo("#movingBlock1", {
    y: '400px',
    rotation: 670,
    duration: 2.5,
},
{
    y: '600px',
    duration: 2,
})


/** https://gsap.com/docs/v3/Plugins/SplitText/ ==========  */
  SplitText.create('.hero-title-wrap', {
    type: 'lines',
    autoSplit: true,
    onSplit(split) {
      return gsap.from(split.lines, {
        rotationX: -56,
            transformOrigin: "50% 50% -160px",

        opacity: 0,
        duration: 1.3,
        stagger: 0.25,
      });
    },
  });


let tl = gsap.timeline()

tl.to(".hero-meta", {
    y: '-15',
    

})



/** Block2 ========= */
gsap.from("#movingBlock2", {

    scrollTrigger: {
        trigger: "#section2",
        start: "top50%",
        // markers: true,
        id: 'section2',
        scrub: 0.5,
        toggleActions: 'play none reverse reset',
    },

    x:'100vh',
    duration: 2,
})



gsap.from(".travel-card", {

    scrollTrigger: {
      trigger: '#section2',
      start: 'top top',
      end: 'bottom bottom',
      //markers: true,
      scrub: 0.5,
    },  
    x: '100vw',
    opacity: 0,
    duration: 2,
    stagger: 0.15,

  });


/** Block3 ========= */
/*let tl = gsap.timeline({
    repeat: -1,
    yoyo:true,
})

tl.to("#movingBlock3", {x: '100', rotation: 90,})
.to("#movingBlock3", {y: '100',})
.to("#movingBlock3", {x: '-100',})
.to("#movingBlock3", {y: '-100', rotation: 0}) */


Draggable.create(".puzzle-piece", {
        bounds: "#section3",

})

/** Block4 ========= */

Draggable.create("#movingBlock4", {
    // type: "rotation",
    dragResistance: 0.17,
    bounds: "#section4",
    inertia:true

})

