const body = document.getElementsByTagName('body');
const mblMenuOpnBtn = document.querySelector('#mobileMenuOpenBtn');
const mblMenuClsBtn = document.querySelector('#mobileMenuCloseBtn');
const mblMenu = document.querySelector('.mobile_menu_wrapper');

mblMenuOpnBtn.addEventListener('click', () => {
    mblMenu.style.left = '0%';
});

mblMenuClsBtn.addEventListener('click', () => {
    mblMenu.style.left = '-100%';
});


const cartOpnBtn = document.querySelector('#cartOpenBtn');
const cartClsBtn = document.querySelector('#cartCloseBtn');
const sliderCart = document.querySelector('.cart_wrapper');

cartOpnBtn.addEventListener('click', () => {
    sliderCart.style.right = '0%';
});

cartClsBtn.addEventListener('click', () => {
    sliderCart.style.right = '-100%';
});