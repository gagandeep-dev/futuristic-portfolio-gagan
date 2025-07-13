// script.js

// Animation for the hero section
gsap.from(".hero-center img", {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.5
});

gsap.from(".hero-center h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 1
});


// Animation for the services section
gsap.from(".service-card", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Animation for the footer section
gsap.from(".footer-container img", {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".footer-container h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
