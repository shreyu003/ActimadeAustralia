var swiper = new Swiper(".heroSectionSlider", {
    navigation: {
      nextEl: ".swiper-button-next.hero_slider_btn-next",
      prevEl: ".swiper-button-prev.hero_slider_btn-prev",
    },
});
var swiper = new Swiper(".category-slider", {
    slidesPerView: 2,
    slidesPerrow: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".category-button-next",
        prevEl: ".category-button-prev",
    },
<<<<<<< HEAD
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20
        }
  }
=======
<<<<<<< HEAD
});
=======
>>>>>>> 08ca4e61a4a243e2b81d636debda889e4500125e
});

var announceBarRemovebtn = document.querySelector('#announceBarRemoveBtn');
var announceBar = document.querySelector('#announceBar');

announceBarRemovebtn.addEventListener('click', () =>{
    announceBar.remove();
})

<<<<<<< HEAD
=======
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
>>>>>>> ea37361c68a9cca2a9b4c36521082887de131766
>>>>>>> 08ca4e61a4a243e2b81d636debda889e4500125e
