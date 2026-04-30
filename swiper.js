const swiper = new Swiper('.swiper.swiper-one', {
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
    pagination: { el: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  // Essential events to make AOS work with Swiper
  on: {
    beforeInit: function() {
      // Initialize AOS before Swiper starts
      AOS.init();
    },
    slideChangeTransitionStart: function () {
      // Hide all animated elements when moving to a new slide
      const animatedElements = this.el.querySelectorAll('[data-aos]');
      animatedElements.forEach(el => {
        el.classList.remove('aos-animate');
      });
    },
    slideChangeTransitionEnd: function () {
      // Re-trigger AOS animations on the active slide
      const activeSlide = this.slides[this.activeIndex];
      const animatedElements = activeSlide.querySelectorAll('[data-aos]');
      animatedElements.forEach(el => {
        el.classList.add('aos-animate');
      });
    },
  },
});

const swiperTwo = new Swiper('.swiper.swiper-two', {
  grabCursor: false, // Disables the grab hand cursor
  allowTouchMove: false, // Disables dragging and swiping entirely
  slidesPerView: 3,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 6,
      spaceBetween: 10
    },
  },

  loop: true,
  centeredSlides: true,   // Centers the active slide
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
        nextEl: '.modal-swiper-button-next',
        prevEl: '.modal-swiper-button-prev',
  },
});


const hours = {
    Monday: "8:30AM-5PM",
    Tuesday: "8:30AM-5PM",
    Wednesday: "8:30AM-5PM",
    Thursday: "8:30AM-5PM",
    Friday: "8:30AM-5PM",
    Saturday: "8:30AM-1PM",
    Sunday: "Closed"
  };

  const todayIndex = new Date().getDay(); // 0 = Sunday, 6 = Saturday
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const todayName = days[todayIndex];
  const todayHours = hours[todayName];

  document.getElementById("today-hour").textContent = `${todayName}: ${todayHours}`;
