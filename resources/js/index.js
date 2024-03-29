/*----------Side bar----------*/

const header = document.querySelector('header');
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

document.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 100) {
        nav.style.top = '-80px';
    }
    else {
        nav.style.top = '0';
    }
})

/*----------Parallax----------*/

const parallax = document.querySelector('.parallax');

document.addEventListener('scroll', () => {
        let offset = document.documentElement.scrollTop;
        parallax.setAttribute('style', `background-position-y: -${offset*0.2-80}px`);
        header.setAttribute('style', `background-position-y: -${offset*0.2-100}px`);

   
})

// HOMEPAGE SLIDER

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