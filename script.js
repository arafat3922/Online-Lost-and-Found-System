document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animations
    gsap.from("header", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(".hero h2", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
    });

    gsap.from(".hero p", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
    });

    gsap.from(".cta-buttons", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.1,
        ease: "power3.out",
    });

    gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });

    // Hover Effects for Feature Cards
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
            });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });
});