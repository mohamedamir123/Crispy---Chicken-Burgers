'use strict';

// add event listener on elements

const addEventOnElements = function(elemments, eventType, callback){
    for(let i = 0; i < elemments.length; i++){
        elemments[i].addEventListener(eventType, callback);
    }
}


// Mobile Nav

const navbar = document.querySelector("[data-navbar]");
const navbarToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");


const togglerNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarToggler, "click",togglerNav);


const closeNav = function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNav);

// Header & Back To Top

const header = document.querySelector("[data-header]");
const topBtn = document.getElementById("back-top-btn");

window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    topBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});



