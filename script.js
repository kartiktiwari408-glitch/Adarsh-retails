// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.transition = "0.8s";

},1500);

});


// ===============================
// STICKY NAVBAR
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(5,8,22,.95)";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

navbar.style.background="rgba(255,255,255,.08)";
navbar.style.boxShadow="none";

}

});


// ===============================
// SCROLL ANIMATION
// ===============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.15});

sections.forEach(section=>{

observer.observe(section);

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// ===============================
// BUTTON HOVER
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});
