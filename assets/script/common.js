var heroSectionSlider = new Swiper(".heroSectionSlider", {
  navigation: {
    nextEl: ".swiper-button-next.hero_slider_btn-next",
    prevEl: ".swiper-button-prev.hero_slider_btn-prev",
  },
})


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
