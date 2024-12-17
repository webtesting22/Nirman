


const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

  const words = elem.textContent.split(' ');
  elem.innerHTML = '';

  words.forEach((el, index) => {
    words[index] = `<span><i>${words[index]}</i></span>`;
  });

  elem.innerHTML = words.join(' ');

  const children = document.querySelectorAll('span > i');
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * .2}s`;
  });

});


// card animation js


/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


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
  speed: 1000,
  breakpoints: {
    // When window width is <= 767px (for mobile)
    767: {
      slidesPerView: 2,
    },
  },

});



// about us number counter js

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: function () {
      thisElement.text(settings.end + '+'); // Append the '+' after the counting ends
      if (settings.complete) { // Call the complete callback if it's provided
        settings.complete();
      }
    }
  });
};


$('#number1').jQuerySimpleCounter({ end: 24, duration: 6000 });
$('#number2').jQuerySimpleCounter({ end: 1500, duration: 6000 });
// $('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
// $('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()
document.addEventListener("DOMContentLoaded", function () {
  const swiperQuiz = new Swiper(".animeslide", {
    loop: true, // Enable looping
    speed: 800, // Slide transition speed
    autoplay: false, // Disable autoplay
    navigation: {
      nextEl: ".animeslide-button-next",
      prevEl: ".animeslide-button-prev",
    },
    on: {
      slideChangeTransitionEnd: function () {
        handleVideoPlayback(this); // Play video when slide changes
      },
    },
  });

  // Function to handle video playback on the active slide
  function handleVideoPlayback(swiper) {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const video = currentSlide.querySelector("video");

    // Pause all videos in other slides and reset them
    swiper.slides.forEach(slide => {
      const otherVideo = slide.querySelector("video");
      if (otherVideo && otherVideo !== video) {
        otherVideo.pause();
        otherVideo.currentTime = 0; // Reset video to the start
      }
    });

    // Play the video in the current active slide
    if (video) {
      video.muted = true; // Ensure muted video for autoplay compatibility
      video.play().catch(error => {
        console.error("Video playback error:", error);
      });

      // Move to the next slide when the video ends
      video.onended = () => {
        swiper.slideNext();
      };
    }
  }

  // Start playing video on the first slide initially
  handleVideoPlayback(swiperQuiz);
});

function changeColor(element) {
  // Remove background color from all anchor links
  var anchorLinks = document.querySelectorAll('.nav-pills a');
  anchorLinks.forEach(function (link) {
    link.style.backgroundColor = '';
  });

  // Set background color to red for the clicked anchor link
  element.style.backgroundColor = 'rgb(0, 129, 199)';
}



