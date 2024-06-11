var categorySlider = new Swiper(".category-slider", {
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
<<<<<<< HEAD

});


var announceBarRemovebtn = document.querySelector('#announceBarRemoveBtn');
var announceBar = document.querySelector('#announceBar');

announceBarRemovebtn.addEventListener('click', () =>{
    announceBar.remove();
})

var swiper = new Swiper(".mySwiper", {
=======
});


var productMainBlock = new Swiper(".product_main_block", {
>>>>>>> eb562c00760e3f3c1b8b9f01dd2da5b1633908a4
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var productImgSlider = new Swiper(".product_img_slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next.prd-slider-next",
      prevEl: ".swiper-button-prev.prd-slider-prev",
    },
    thumbs: {
      swiper: productMainBlock,
    },
  });
<<<<<<< HEAD
=======

>>>>>>> eb562c00760e3f3c1b8b9f01dd2da5b1633908a4
