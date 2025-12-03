// Lógica del carrusel
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll("#carousel .carousel-slide");
const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");
const indicators = document.querySelectorAll("#carousel-indicators .indicator");

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach(ind => ind.classList.remove("active"));
  indicators[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

indicators.forEach(indicator => {
  indicator.addEventListener("click", () => {
    currentIndex = parseInt(indicator.getAttribute("data-index"));
    updateCarousel();
  });
});

// Auto-play cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}, 5000);
