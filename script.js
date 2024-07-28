window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  if (scrollPosition > viewportHeight * 0.3) {
    header.classList.remove('transparent');
  } else {
    header.classList.add('transparent');
  }
});
