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
  }, 1000); // 2 seconds (adjust as needed)
});

