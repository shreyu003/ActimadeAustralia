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