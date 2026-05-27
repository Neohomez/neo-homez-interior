document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll('.hero-slide');

  if (!slides || slides.length === 0) return;

  let curSlide = 0;

  function goNext() {
    if (slides.length < 2) return;

    slides[curSlide].classList.remove('active');

    curSlide = (curSlide + 1) % slides.length;

    slides[curSlide].classList.add('active');
  }

  setInterval(goNext, 5500);

});
