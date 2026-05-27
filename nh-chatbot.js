<script>
const slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {

  const current = slides[index];
  const nextIndex = (index + 1) % slides.length;
  const next = slides[nextIndex];

  current.classList.remove('active');
  next.classList.add('active');

  index = nextIndex;
}

setInterval(showNextSlide, 3000);
</script>