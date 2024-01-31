// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     loop: true,  // Enable infinite loop
//     autoplay: {
//       delay: 2000,  // Autoplay every 2 seconds
//       disableOnInteraction: false,  // Autoplay continues after user interaction
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
var swiper = new Swiper("#js-swiper-hotels", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000, // Autoplay every 5 seconds
  },
  breakpoints: {
    // When window width is <= 767px (for mobile)
    767: {
      slidesPerView: 2,
    },
  },
});


//   navigation menu
const open = document.querySelector('.container');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to('nav', { right: 0 })
      .to('nav', { height: '104vh' }, '-=.1')
      .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
      .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
      .to('nav h2', { opacity: 1 }, '-=1');
  }
});

close.addEventListener('click', () => {
  tl.reverse();
});






// --------------------------smooth scrooler---------------------

// store components in variables
const page = document.querySelector("body");
const wrapper = document.querySelector("body");

// ease value to be used in interpolation
const ease = 0.05; // 20%

// create an object to store scroll details
const scroll = {
  current: 0, // current scroll position
  target: 0, // target scroll position
  limit: 0 // limit of scroll
};

// function to update target scroll position
const updateTarget = (e) => {
  // set the target value to deltaY
  // which is distance covered by mouseWheel
  scroll.target += e.deltaY;
};

// create an event listener to listen for mouse-wheel
document.addEventListener("mousewheel", updateTarget);

// linear interpolation function
const lerp = (current, target) => {
  // get distance between current & target scroll points
  const distanceBetween = target - current;

  // get a percentage of that distance, in this case 20%
  const distanceToTravel = distanceBetween * ease;

  // add the % distance to the current scroll value
  return current + distanceToTravel;

  // shorthand for lerp is
  // current = current + ((target - current) * ease)
};

// clamping function to limit mousewheel values
const clamp = (min, max, value) => {
  const clamped = Math.min(Math.max(value, min), max);
  return clamped;
};




// main scroll function
const smoothScroll = () => {
  const maxScroll = wrapper.clientHeight - window.innerHeight;
  // clamp scroll target value
  scroll.target = clamp(0, maxScroll, scroll.target);

  const { current, target } = scroll;

  const transition = lerp(current, target);
  scroll.current = transition;

  // translate page wrapper based on lerped value
  wrapper.style.transform = `translateY(-${scroll.current}px)`;

  // use requestAnimationFrame with callback
  // to create an infinite loop of this function
  // that updates 60 times per second
  // or 30 times per second
  // depending on browser refresh rate
  window.requestAnimationFrame(smoothScroll);
};

// call smoothScroll to start loop
smoothScroll();

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

// Set initial rotation and force3D for better performance
TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
function onLoad() {
  updateScroller();
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);

  // Update the scroll position after a short delay to allow the browser to stabilize
  setTimeout(function () {
    scroller.y = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
    updateScroller();
  }, 100);
}




// card animation js


/* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);




// Use this Js Code for preloading effect

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
    preloader.classList.add("preloaded");
    setTimeout(() => {
      preloader.remove();
    }, 30000);
  });
});
