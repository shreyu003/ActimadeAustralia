var swiper = new Swiper(".heroSectionSlider", {
    navigation: {
      nextEl: ".swiper-button-next.hero_slider_btn-next",
      prevEl: ".swiper-button-prev.hero_slider_btn-prev",
    },
});
var swiper = new Swiper(".category-slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".category-button-next",
        prevEl: ".category-button-prev",
    },
});

var announceBarRemovebtn = document.querySelector('#announceBarRemoveBtn');
var announceBar = document.querySelector('#announceBar');

announceBarRemovebtn.addEventListener('click', () =>{
    announceBar.remove();
})