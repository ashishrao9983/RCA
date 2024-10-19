let x = document.querySelector(".chakar img");

gsap.to(x, {
    rotate: 360,     // Rotate 360 degrees
    duration: 20,     // Rotate in 2 seconds
    repeat: -1,      // Infinite rotation
    ease: "linear",  // Constant speed
    // transformOrigin: "50% 50%"  // Rotate around the center of the image
});

let y=document.querySelector(".chakar2 img")

gsap.to(y,{
    rotate:-360,
    duration:20,
    repeat:-1,
    ease:"linear",
})
window.addEventListener("scroll", function() {
    // Get the scroll position
    let scrollPosition = window.scrollY;

    // Get the total height of the window
    let windowHeight = window.innerHeight;

    // Calculate the opacity based on the scroll position
    let opacityValue = 1 - (scrollPosition*2.5 / windowHeight);

    // Set a minimum opacity limit (optional)
    if (opacityValue < 0) {
        opacityValue = 0;
    }

    // Select the heading element
    let heading = document.querySelector(".heading");

    // Apply the opacity to the heading
    heading.style.opacity = opacityValue;
});


let aboutEvent = document.querySelector('.about-event');

// GSAP Animation
let desktopAnimationApplied = false;  // Track whether desktop animations are applied

function applyAnimationsForDesktop() {
    if (window.innerWidth > 768 && !desktopAnimationApplied) {
        // Apply animations if on desktop and they are not already applied
        gsap.to("#about-event", {
            duration: 2,
            left: '50%',
            ease: "none",
            yoyo: true,
            repeat: -1,
            repeatDelay: 1
        });

        gsap.to(".about-nit", {
            duration: 2,
            right: '50%',
            ease: "none",
            yoyo: true,
            repeat: -1,
            repeatDelay: 1
        });

        desktopAnimationApplied = true; // Mark animations as applied
    } else if (window.innerWidth <= 768 && desktopAnimationApplied) {
        // Kill animations if switching to mobile view
    

        // Reset positions to their original values
        gsap.to("#about-event", {
            left: '0', // Original position
            duration: 0 // Instant reset
        });

        gsap.to(".about-nit", {
            right: '0', // Original position
            duration: 0 // Instant reset
        });
        gsap.killTweensOf("#about-event"); // Stop any ongoing animations on about-event
        gsap.killTweensOf(".about-nit");   // Stop any ongoing animations on about-nit
        desktopAnimationApplied = false; // Mark animations as not applied
    }
}

// Call the function on page load
applyAnimationsForDesktop();

// Listen for window resize events
window.addEventListener('resize', function() {
    applyAnimationsForDesktop();  // Reapply or reset animations based on the new screen size
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




// Include GSAP library in your HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.navi');

    hamburger.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            // Animate out
            gsap.to(".nav-list", {
                right: '-40%', // Move off-screen
                duration: .2,
                ease: 'none',
                onComplete: () => {
                    navList.classList.remove('active'); // Remove active class after animation
                }
            });
        } else {
            // Animate in
            navList.classList.add('active'); // Add active class first to enable display
            gsap.to(".nav-list", {
                right: '5%', // Move into view
                duration: .2,
                ease: 'none'
            });
        }
    });
});
