const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");
const menu_trigger = document.querySelector(".menu-trigger");


hamburger.addEventListener("click", ()=>{
    menu_trigger.classList.toggle("active");
    mobile_menu.classList.toggle("active");

});

/* document.addEventListener("scroll",()=>{
    var scroll_position = window.scrollY;
    if(scroll_position >250){

    }
}) */
