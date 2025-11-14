document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const btnPrev = document.getElementById('prev');
  const btnNext = document.getElementById('next');
  let current = 0;

  function mostrarSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === idx) {
        slide.classList.add('active');
      }
    });
  }

  btnPrev.addEventListener('click', () => {
    current = (current === 0) ? slides.length - 1 : current - 1;
    mostrarSlide(current);
  });

  btnNext.addEventListener('click', () => {
    current = (current === slides.length - 1) ? 0 : current + 1;
    mostrarSlide(current);
  });

  mostrarSlide(current);
});