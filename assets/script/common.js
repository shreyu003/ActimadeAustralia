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
      slidesPerView: 5,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});
var realatedSwiper = new Swiper(".realated-swiper", {
  slidesPerView: 6,
  slidesPerrow: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".related-prd-button-next",
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
    slidesPerView: 5,
    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    navigation: {
        nextEl: ".sale-button-next",
         prevEl: ".sale-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      425: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 5
      }
    }
});

// var brandSwiper = new Swiper(".brand-swiper", {
    // loop: true,
    // slidesPerView: 6,
    // grid: {
    // rows: 2,
    // },
    // spaceBetween: 10,
    // autoplay: {
    // delay: 2500,
    //     disableOnInteraction: false,
    // },
//     navigation: {
//         nextEl: ".sale-button-next",
//     },
//     breakpoints: {
//       425: {
//         slidesPerView: 3
//       },
//       768: {
//         slidesPerView: 3
//       }
//     }
// });
var brandSwiper = new Swiper(".brand-swiper", {
  loop: true,
  slidesPerView: 5,
  grid: {
      rows: 2,
  },
  spaceBetween: 15,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".logo-next-block",
      prevEl: ".logo-prev-block",
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
      slidesPerView: 5,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});

var prdPageBrandSwiper = new Swiper(".prd-page-brand-swiper", {
    slidesPerView: 6,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".logo-next-block",
        prevEl: ".logo-prev-block",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
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
        slidesPerView: 4,
        spaceBetween: 20
      },
      1364: {
        slidesPerView: 6,
        spaceBetween: 20
      },
    }
});

var productMainBlock = new Swiper(".product_main_block", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
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
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
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