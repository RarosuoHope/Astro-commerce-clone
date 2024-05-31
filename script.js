document.addEventListener('DOMContentLoaded', function(){
const cartButton = document.getElementById("cart-icon")
const hiddenCart = document.getElementById("hidden-cart")
const bodyOpacity = document.getElementById('body')
const productDiv = document.querySelectorAll('product-div')

cartButton.addEventListener('click', function(){
    if(hiddenCart.style.display=== 'block'){
        hiddenCart.style.display = 'none'
        bodyOpacity.style.backgroundColor = 'initial'
       
    } else{
        hiddenCart.style.display = 'block';
bodyOpacity.style.backgroundColor = 'rgba(83, 79, 79, 0.3)'



    }
});
});