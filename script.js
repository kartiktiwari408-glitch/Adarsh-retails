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
// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat-box h2");

const runCounter = (counter) => {

let target = parseInt(counter.innerText);

if (isNaN(target)) return;

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if (count < target) {

counter.innerText = Math.floor(count) + "+";

requestAnimationFrame(update);

} else {

counter.innerText = target + "+";

}

};

update();

};

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

}, { threshold: 0.5 });

counters.forEach(counter => {

counterObserver.observe(counter);

});


// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.querySelector(".hero h2");

const words = [

"Premium Web Designer",

"Frontend Developer",

"UI / UX Creator",

"Creative Coder"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

const current = words[wordIndex];

if (!typingElement) return;

if (!deleting) {

typingElement.textContent = current.substring(0, charIndex++);

if (charIndex > current.length) {

deleting = true;

setTimeout(typeEffect, 1500);

return;

}

} else {

typingElement.textContent = current.substring(0, charIndex--);

if (charIndex < 0) {

deleting = false;

wordIndex = (wordIndex + 1) % words.length;

}

}

setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

topBtn.style.opacity = "1";

topBtn.style.visibility = "visible";

} else {

topBtn.style.opacity = "0";

topBtn.style.visibility = "hidden";

}

});

topBtn.onclick = () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

};
// ===============================
// ACTIVE NAV LINK
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

allSections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") == "#" + current) {

link.classList.add("active");

}

});

});


// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("mousemove",(e)=>{

const card=document.querySelector(".glass-card");

if(!card) return;

let x=(window.innerWidth/2-e.pageX)/35;
let y=(window.innerHeight/2-e.pageY)/35;

card.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});


// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=
document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=
(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


// ===============================
// RIPPLE BUTTON EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";
circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


// ===============================
// PRELOADER REMOVE
// ===============================

setTimeout(()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.display="none";

}

},2000);


// ===============================
// END
// ===============================
