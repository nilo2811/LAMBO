document.addEventListener("DOMContentLoaded", function() {
    var sliderImages = ["img/huracan.jpg", "img/revuelto.jpg", "img/veneno.jpg"]; 
    var currentIndex = 0;
    var welcomeSection = document.querySelector('.welcome');
    var transitionDuration = 2000; 

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        changeSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        changeSlide();
    }

    function changeSlide() {
        var nextImage = new Image();
        nextImage.src = sliderImages[currentIndex];
        nextImage.onload = function() {
            welcomeSection.style.transition = `background-image 3s ease-in-out`; 
            welcomeSection.style.backgroundImage = `url(${nextImage.src})`; 
            welcomeSection.style.backgroundSize = "cover"; 
            setTimeout(() => {
                welcomeSection.style.transition = `background-image 15s ease-in-out`; 
            }, 8000);
        };
    }

    var slideInterval = setInterval(nextSlide, 5000); 

    
    var prevArrow = document.createElement('div');
    prevArrow.classList.add('slider-arrow', 'left-arrow');
    prevArrow.innerHTML = '&#10094;';
    prevArrow.addEventListener('click', function() {
        clearInterval(slideInterval); 
        prevSlide(); 
        slideInterval = setInterval(nextSlide, 5000);
    });
    welcomeSection.appendChild(prevArrow);

    var nextArrow = document.createElement('div');
    nextArrow.classList.add('slider-arrow', 'right-arrow');
    nextArrow.innerHTML = '&#10095;';
    nextArrow.addEventListener('click', function() {
        clearInterval(slideInterval); 
        nextSlide(); 
        slideInterval = setInterval(nextSlide, 3000); 
    });
    welcomeSection.appendChild(nextArrow);
});
$(document).ready(function(){
    $(".submenu").hide();
    
   
    $(".expandable > a").click(function(){
        $(".submenu").not($(this).next(".submenu")).slideUp();
        $(".active-expandable").removeClass("active-expandable");
        $(this).next(".submenu").slideToggle(); 
        $(this).parent().toggleClass("active-expandable"); 
    });
});
$(document).ready(function(){
    $(".main-navigation ul li").click(function(){
        $(".main-navigation ul li").removeClass("active-nav");
        $(this).addClass("active-nav");
        var expandedBlock = $(this).find(".expanded-block");
        var expandedBlockContent = expandedBlock.children();
        expandedBlock.height(expandedBlockContent.outerHeight());
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
const navigation = document.querySelector('.main-navigation');

function changeNavigationColor() {
  if (window.scrollY > 0) {
    navigation.classList.add('active');
  } else {
    navigation.classList.remove('active');
  }
}
window.addEventListener('scroll', changeNavigationColor);

