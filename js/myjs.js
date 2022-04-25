$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:2000,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.onclick = function(event) {
    var loginform = document.getElementById('id01');
    var signupform = document.getElementById('id02');
    if (event.target == loginform) {
        loginform.style.display = "none";
    }
    if (event.target == signupform) {
        signupform.style.display = "none";
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  } 
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        5000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
