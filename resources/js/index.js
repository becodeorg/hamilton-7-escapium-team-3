/*----------Side bar----------*/

const nav = document.querySelector('#navMenu');
const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.fa-bars');
const closeMenuBtn = document.querySelector('.fa-xmark');
closeMenuBtn.style.display = 'none';

function showMenu() {
    menu.style.left = '0';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
}

function hideMenu() {
    menu.style.left = '-300px';
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none';
}

function hideNav() {
    if(document.documentElement.scrollTop > 1) {
        nav.style.top = '-100px';
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
