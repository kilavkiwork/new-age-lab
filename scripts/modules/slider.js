const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
let autoPlayInterval;

function updateSlides(direction) {
  if (slides.length === 0) return;

  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");

  resetTimer();
}

const resetTimer = () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => updateSlides(1), 5000);
};

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => updateSlides(-1));
  nextBtn.addEventListener("click", () => updateSlides(1));
}

resetTimer();

export { updateSlides };
