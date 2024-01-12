import getData from "./Games.js";

getData();
let categories =document.querySelectorAll('.navCategory');
categories.forEach(category => {
    let navCat= category.getAttribute('category');
    category.addEventListener('click' , ()=>{
        getData(navCat);
    });
    
});

document.addEventListener("DOMContentLoaded", ()=> {
    let navLinks = document.querySelectorAll(".nav-item .nav-link");

    navLinks.forEach(link=> {
    link.addEventListener("click", ()=> {
        navLinks.forEach(navLink=> {
        navLink.classList.remove("active");
        });
        link.classList.add("active");
    });
    });
});
