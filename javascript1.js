let searchform=document.querySelector('.search-form');


document.querySelector('#search-btn').onclick=()=>{
     searchform.classList.toggle('active');


     // searchform.classList.remove('active');  
     shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
     navBar.classList.remove('active');
}


let shoppingCart=document.querySelector('.shopping-cart');


document.querySelector('#cart-btn').onclick=()=>{
     shoppingCart.classList.toggle('active');
     searchform.classList.remove('active');  
     // shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
     navBar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');


document.querySelector('#login-btn').onclick=()=>{
     loginForm.classList.toggle('active');
     searchform.classList.remove('active');  
     shoppingCart.classList.remove('active');
     // loginForm.classList.remove('active');
     navBar.classList.remove('active');
}


let navBar=document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick=()=>{
     navBar.classList.toggle('active');
     searchform.classList.remove('active');  
     shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
     // navBar.classList.remove('active');
}

window.onscroll =()=>{
     searchform.classList.remove('active');  
     shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
     navBar.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
     spaceBetween: 20,
autoplay:{
     delay:7500,
     disableOnInteraction:false,
},

pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },

     breakpoints: {
       0: {
         slidesPerView: 1,
       },

       640: {
          slidesPerView: 2,
        },

       768: {
         slidesPerView: 3,
       },
       1020: {
         slidesPerView: 4,
       },
      
     },
   });





   var swiper = new Swiper(".review-slider", {
     loop:true,
      spaceBetween: 20,
 autoplay:{
      delay:7500,
      disableOnInteraction:false,
 }, 
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
       
      },
    });