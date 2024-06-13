$(document).ready(function(){
  $('.mobileMenuOpenBtn').click(function(){
    $('.mobile_menu_wrapper').show();
    setTimeout(function(){
      $('.mobile_menu').css('left', '0%');
    }, 300);
  });

  $('.mobileMenuCloseBtn').click(function(){
    $('.mobile_menu').css('left', '-100%');
    setTimeout(function(){
      $('.mobile_menu_wrapper').hide();
    }, 300);
  });
  
  $('.cartOpenBtn').click(function(){
    $('.cart_wrapper').show();
    setTimeout(function(){
      $('.cart_block').css('right', '0%');
    }, 300);
  });

  $('.cartCloseBtn').click(function(){
    $('.cart_block').css('right', '-100%');
    setTimeout(function(){
      $('.cart_wrapper').hide();
    }, 300);
  });
});

function printBtn(){
  print();
}

function shareBtn(){
  navigator.share({
    url: document.URL,
    title: document.title,
  });
}

var quantity = 1;
function increment() {
  quantity++;
  document.getElementById('quantity').value = quantity;
}
function decrement() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').value = quantity;
  }
}