// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    header.classList.remove('scrolled'); // Remove scrolled class
    header.classList.add('transparent'); // Restore transparency
  } else {
    header.classList.add('scrolled'); // Add class when scrolled
    header.classList.remove('transparent'); // Remove transparency
  }
});


window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Set a timeout for the loader
  setTimeout(() => {
    loader.style.display = 'none'; // Hide the loader
    content.style.display = 'block'; // Show the content
  }, 100); // 2 seconds (adjust as needed)
});



const text = "Smart Financial Solutions";
const speed = 100; // ms per character
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;



// Animate section on scroll
window.addEventListener("scroll", () => {
  const section = document.querySelector("#section2");
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 150;

  if (sectionTop < triggerPoint) {
    section.classList.add("visible");
  }
});





// Team Carousel
const carousel = document.getElementById('teamCarousel');
const dotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('teamPrev');
const nextBtn = document.getElementById('teamNext');
const cards = carousel.querySelectorAll('.team-card');
const total = cards.length;
let current = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(index) {
  current = (index + total) % total;
  carousel.scrollTo({ left: cards[current].offsetLeft - 48, behavior: 'smooth' });
  document.querySelectorAll('#carouselDots .dot').forEach((d, i) => d.classList.toggle('active', i === current));
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

carousel.addEventListener('scroll', () => {
  const cardWidth = cards[0].offsetWidth + 32;
  current = Math.round(carousel.scrollLeft / cardWidth);
  document.querySelectorAll('#carouselDots .dot').forEach((d, i) => d.classList.toggle('active', i === current));
});

