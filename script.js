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





const carousel = document.querySelector('.team-carousel');
const dotsContainer = document.getElementById('carouselDots');
const cards = document.querySelectorAll('.team-card');

cards.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    carousel.scrollTo({
      left: cards[index].offsetLeft - 16,
      behavior: 'smooth'
    });
  });
  dotsContainer.appendChild(dot);
});

carousel.addEventListener('scroll', () => {
  const scrollLeft = carousel.scrollLeft + 100;
  const cardWidth = cards[0].offsetWidth + 32;
  const activeIndex = Math.round(scrollLeft / cardWidth);

  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === activeIndex);
  });
});

