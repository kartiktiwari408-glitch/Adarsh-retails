/*======================================
PRELOADER
======================================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 500);

});

/*======================================
CUSTOM CURSOR
======================================*/

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

cursor2.style.left = e.clientX + "px";
cursor2.style.top = e.clientY + "px";

});

/*======================================
TYPING EFFECT
======================================*/

const typing = document.querySelector(".typing");

const words = [

"Web Designer",

"Front-End Developer",

"Web Developer",

"Graphic Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent = currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent = currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 50 : 120);

}

typeEffect();

/*======================================
STICKY HEADER
======================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});

/*======================================
SCROLL TO TOP
======================================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/*======================================
MOBILE MENU
======================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="ri-close-line"></i>';

    } else {

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    }

});

/*======================================
CLOSE MENU AFTER CLICK
======================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    });

});

/*======================================
ACTIVE NAVIGATION
======================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*======================================
SCROLL REVEAL
======================================*/

const revealElements = document.querySelectorAll(

".section-title,.service-card,.skill,.project-card,.stat-box,.timeline-item,.contact-wrapper,.about-wrapper"

);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*======================================
COUNTER ANIMATION
======================================*/

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 50);

        if (count >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        }

    };

    update();

});

/*======================================
CONTACT FORM
======================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

/*======================================
FADE ANIMATION
======================================*/

const style = document.createElement("style");

style.innerHTML = `

.show{

opacity:1 !important;

transform:translateY(0) !important;

transition:all .8s ease;

}

.section-title,

.about-wrapper,

.skill,

.service-card,

.project-card,

.timeline-item,

.stat-box,

.contact-wrapper{

opacity:0;

transform:translateY(60px);

}

.nav-links.active{

display:flex !important;

flex-direction:column;

position:absolute;

top:80px;

left:0;

width:100%;

background:#0b1120;

padding:25px;

gap:20px;

}

`;

document.head.appendChild(style);

/*======================================
END OF SCRIPT
======================================*/

console.log("✅ Portfolio Loaded Successfully");
