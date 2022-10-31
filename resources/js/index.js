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


