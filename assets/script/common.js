var categorySlider = new Swiper(".category-slider", {
  slidesPerView: 6,
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

});

<<<<<<< HEAD
var saleSlider = new Swiper(".sale-slider", {
    loop: true,
    autoplay: {
    delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".category-button-next",
    },
});
var brandSwiper = new Swiper(".brand-swiper", {
    // loop: true,
    slidesPerView: 6,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".logo-next-block",
        prevEl: ".logo-prev-block",
    },
});
=======
>>>>>>> 7d5d0695a1511ab0fd8e60d0e448b2dfb4b4ee07

var productMainBlock = new Swiper(".product_main_block", {
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
<<<<<<< HEAD
  });
=======
  });
  
  //product page quantity selector
  let quantity = 1;

  function increment() {
    quantity++;
    document.getElementById('quantity').value = quantity;
}

  function decrement() {
    if (quantity > 0) {
        quantity--;
        document.getElementById('quantity').value = quantity;
    }
}
>>>>>>> 7d5d0695a1511ab0fd8e60d0e448b2dfb4b4ee07
