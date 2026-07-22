// Loader
window.addEventListener('load',()=>{
  document.getElementById('loader').style.display='none'
})

// Custom Cursor
const cursor = document.createElement('div')
cursor.classList.add('cursor')
document.body.appendChild(cursor)
document.addEventListener('mousemove',e=>{
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
})

// Navbar Scroll
window.addEventListener('scroll',()=>{
  const navbar = document.querySelector('.navbar')
  if(window.scrollY > 50) navbar.style.background='rgba(10,10,15,0.9)'
  else navbar.style.background='var(--glass)'
})

// Typed.js for Hero
new Typed('.typed-text',{
  strings:['Web Designer','Graphic Designer','Logo Designer'],
  typeSpeed:100,
  backSpeed:50,
  loop:true
})

// Calculator
const calcItems = document.querySelectorAll('.calc-item')
const totalSpan = document.getElementById('total')
const orderBtn = document.getElementById('orderBtn')
if(calcItems.length > 0){
  calcItems.forEach(item=>{
    item.addEventListener('change', updateTotal)
  })
  function updateTotal(){
    let total = 0
    let services = []
    calcItems.forEach(item=>{
      if(item.checked){
        total += parseInt(item.dataset.price)
        services.push(item.parentElement.textContent.trim())
      }
    })
    totalSpan.textContent = total
    orderBtn.href = `https://wa.me/918298827509?text=Hi Adarsh, I want to order: ${services.join(', ')}. Total: ₹${total}`
  }
}

// Counter Animation
const counters = document.querySelectorAll('.counter')
const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target')
  const count = +counter.innerText
  const inc = target / 200
  if(count < target){
    counter.innerText = Math.ceil(count + inc)
    setTimeout(()=>animateCounter(counter), 10)
  } else {
    counter.innerText = target + '+'
  }
}
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      counters.forEach(counter=>animateCounter(counter))
      observer.disconnect()
    }
  })
})
if(document.querySelector('.stats')) observer.observe(document.querySelector('.stats'))

// FAQ Toggle
document.querySelectorAll('.faq-item h4').forEach(item=>{
  item.addEventListener('click',()=>{
    item.parentElement.classList.toggle('active')
  })
})

// Back to Top
const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll',()=>{
  if(window.scrollY > 500) backToTop.classList.add('show')
  else backToTop.classList.remove('show')
})

// Contact Form
const contactForm = document.querySelector('.contact-form')
if(contactForm){
  contactForm.addEventListener('submit',e=>{
    e.preventDefault()
    alert('Message sent! I will contact you soon on WhatsApp.')
  })
}
