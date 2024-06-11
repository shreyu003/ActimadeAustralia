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
<<<<<<< HEAD
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
=======

});


var announceBarRemovebtn = document.querySelector('#announceBarRemoveBtn');
var announceBar = document.querySelector('#announceBar');

announceBarRemovebtn.addEventListener('click', () =>{
    announceBar.remove();
})

var swiper = new Swiper(".mySwiper", {
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
>>>>>>> 3ce844fb8732a60bcb77f9ce4fea3786faf78206
