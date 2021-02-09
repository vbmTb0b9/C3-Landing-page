$( document ).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);

    var overlayTopGradient = CSSRulePlugin.getRule("#section-3 .overlay-text:before");
    const   aboutusSection = gsap.timeline();
            artistSection = gsap.timeline();
            sustainSection = gsap.timeline();
            soonSection = gsap.timeline();

    aboutusSection.from("#section-2 .title",1 ,{opacity:0, ease: "expo.inOut"})
    .from("#section-2 .headline",2 ,{opacity:0, ease: "expo.inOut"})
    .from("#section-2 .description",3 ,{opacity:0, ease: "expo.inOut"})
    .from("#section-2 .logo-c3-footer",4 ,{opacity:0, ease: "expo.inOut"});
    

    artistSection.from(".top-row", {yPercent:100, opacity:1, ease: "expo.out", duration:1})
    .from(".bottom-row", {yPercent: 100, opacity:1, ease: "power4.out", duration:1}, "<0.1")
    .to(".top-row", { css: { 'filter': 'grayscale(100%)','-webkit-filter': 'grayscale(100%)'} })
    .to(".bottom-row", { css: { 'filter': 'grayscale(100%)','-webkit-filter': 'grayscale(100%)'} })
    .to(".top-row", {yPercent:-20, duration:3, ease: "power4.out"})
    .to(".bottom-row",{yPercent:-20, duration:3, ease: "power4.out"}, "<")
    .to(overlayTopGradient, {duration:1, opacity:1, yPercent: 100}, "<")
    .from(".overlay-text", {duration: 3, yPercent: 100}, "<");

    sustainSection.from("#section-4 .title", {opacity:0,})
    .from("#section-4 .headline", {opacity:0,})
    .from("#section-4 .description", {opacity:0,})
    .from("#section-4 .logo-c3-footer", {opacity:0, ease: "expo.inOut",});
    
    soonSection.from("#section-6 h1", {opacity:0, duration:2 , ease: "power4.in",})
    .from("#section-6 h2", {opacity:0, duration:2 , ease: "power4.in",})
    .from("#section-6 .social-list",{opacity:0, duration:5 , ease: "expo.inOut",})
    .from("#section-6 .logo-c3-footer", {opacity:0, ease: "expo.inOut",})
    .from("#section-6 #copyright", {opacity:0, ease: "expo.inOut",});

//Scrolltrigger
    ScrollTrigger.create({
        animation: aboutusSection,
        trigger: "#section-2",
        start: "top top",
        end: "+=2000",
        scrub: true,
        // markers: true,
        pin: true,
        anticipatePin: 1,
        // toggleActions:"restart pause reverse reset",
        
    });
    ScrollTrigger.create({
        animation: artistSection,
        trigger: "#section-3",
        start: "top top",
        end: "+=4000",
        scrub: true,
        // markers: true,
        pin: true,
        anticipatePin: 1,
        // toggleActions:"restart pause reverse reset",
    });

    ScrollTrigger.create({
        animation: sustainSection,
        trigger: "#section-4",
        start: "top top",
        end: "+=2000",
        scrub: true,
        // markers: true,
        pin: true,
        anticipatePin: 1,
        // toggleActions:"restart pause reverse reset",
        
    });
    ScrollTrigger.create({
        animation: soonSection,
        trigger: "#section-6",
        start: "top top",
        end: "+=1000",
        scrub: true,
        // markers: true,
        pin: true,
        anticipatePin: 1,
        // toggleActions:"restart pause reverse reset",
        
    });
});
