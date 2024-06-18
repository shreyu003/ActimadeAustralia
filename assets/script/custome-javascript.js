$(document).ready(function() {
  $('#showGstBtn').change(function() {
    var gstPrice = $('.gst-price');
    if ($(this).is(':checked')) {
    gstPrice.addClass('price-show').removeClass('price-hide');
    } else {
      gstPrice.removeClass('price-show').addClass('price-hide');
    }
  });

  $('.sizeGuideOpenBtn').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 'smooth');
    $('body').css('overflow','hidden');
    $('.size-guide-wrapper').show();
    setTimeout(function(){
      $('.size_guide').css('top', '50%');
    }, 300);
  });

  $('.sizeGuideCloseBtn').click(function(){
    $('body').css('overflow','auto');
    $('.size_guide').css('top', '-100%');
    setTimeout(function(){
      $('.size-guide-wrapper').hide();
    }, 300);
  });
});

const locationDiv = document.getElementById('locationDiv');
const hiddenLink = document.getElementById('hiddenLink');

locationDiv.addEventListener('click', function() {
  hiddenLink.click();
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