// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Navbar Shadow =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#020617";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
  } else {
    navbar.style.background = "rgba(15,23,42,.85)";
    navbar.style.boxShadow = "none";
  }
});

// ===== Reveal Animation =====
const revealItems = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  revealItems.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }

  });

});

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(60px)";
  item.style.transition = "all .8s ease";
});

// ===== Typing Effect =====
const text = "Professional Web Designer";
const target = document.querySelector(".hero h2");

let i = 0;

target.innerHTML = "";

function typing() {

  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }

}

typing();

// ===== Current Year =====
const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Adarsh Web Designer. All Rights Reserved.`;
