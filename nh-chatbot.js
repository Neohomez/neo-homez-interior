<script>
document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll('.hero-slide');
  let curSlide = 0;

  function goNext() {
    slides[curSlide].classList.remove('active');

    curSlide = (curSlide + 1) % slides.length;

    slides[curSlide].classList.add('active');
  }

  setInterval(goNext, 5500);

});
</script>
