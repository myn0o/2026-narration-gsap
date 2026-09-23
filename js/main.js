/** Import=================== */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,InertiaPlugin);

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



gsap.from("#path-stage", {


    scrollTrigger: {
      trigger: '#souvenirs',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
    },  
    
    
    x: '100vw',
    opacity: 0,
    duration: 2,
    stagger: 0.15,

  });


/** Block3 ========= */
let tl = gsap.timeline({
    repeat: -1,
    yoyo:true,
})

tl.to("#movingBlock3", {x: '100', rotation: 90,})
.to("#movingBlock3", {y: '100',})
.to("#movingBlock3", {x: '-100',})
.to("#movingBlock3", {y: '-100', rotation: 0})

/** Block4 ========= */

Draggable.create("#movingBlock4", {
    // type: "rotation",
    dragResistance: 0.17,
    bounds: "#section4",
    inertia:true

})

