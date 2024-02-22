const productImg = document.querySelector('.product-img');

function updateProductImg() {
  if (window.innerWidth < '1440') {
    productImg.src = 'images/image-product-mobile.jpg';
  }
  else {
    productImg.src = 'images/image-product-desktop.jpg';
  }}

window.addEventListener('resize', () => {
  updateProductImg();
})

updateProductImg();