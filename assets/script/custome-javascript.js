
// const body = document.getElementsByTagName('body');
// const mblMenuOpnBtn = document.querySelector('#mobileMenuOpenBtn');
// const mblMenuClsBtn = document.querySelector('#mobileMenuCloseBtn');
// const mblMenu = document.querySelector('.mobile_menu_wrapper');

// mblMenuOpnBtn.addEventListener('click', () => {
//     mblMenu.style.left = '0%';
//     body.style.overflowY = 'hidden';
// });

// mblMenuClsBtn.addEventListener('click', () => {
//     mblMenu.style.left = '-100%';
// });


// const cartOpnBtn = document.querySelector('#cartOpenBtn');
// const cartClsBtn = document.querySelector('#cartCloseBtn');
// const sliderCart = document.querySelector('.cart_wrapper');

// cartOpnBtn.addEventListener('click', () => {
//     sliderCart.style.right = '0%';
// });

// cartClsBtn.addEventListener('click', () => {
//     sliderCart.style.right = '-100%';
// });

var printBtn = document.querySelector('#print-btn');
printBtn.addEventListener('click', () => {
    print();
})

var shareBtn = document.querySelector('#share-btn');
shareBtn.addEventListener("click", function () {
    navigator.share({
      url: document.URL,
      title: document.title,
    });
});

// let quantity = 1;
// function increment() {
//     quantity++;
//     document.getElementById('quantity').value = quantity;
// }
// function decrement() {
//     if (quantity > 0) {
//         quantity--;
//         document.getElementById('quantity').value = quantity;
//     }
// }