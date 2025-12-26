
const toggleBtn = document.getElementById('toggleMenu');
const navMenu = document.getElementById('navMenu');


toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  toggleBtn.classList.toggle('open');
  toggleBtn.textContent = toggleBtn.classList.contains('open') ? '✖' : '☰';
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    toggleBtn.classList.remove('open');
    toggleBtn.textContent = '☰';
  });
});


// Efek mengetik otomatis di bagian "Web Developer"
const typingElement = document.querySelector(".typing");
const words = ["Web Developer", "UI/UX Designer", "Front-End Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingElement.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100); 
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60); 
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); 
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 200); 
    }
  }
}

typeEffect();

document.addEventListener("DOMContentLoaded", type);

// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Dark/light mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Form submit
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Pesan berhasil dikirim!');
  form.reset();
});
