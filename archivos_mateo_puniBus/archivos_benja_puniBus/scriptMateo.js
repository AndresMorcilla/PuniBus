document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.getElementById('sliderTrack');
    const slides = sliderTrack.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    const intervalTime = 3000;

    function nextSlide() {
        currentIndex++;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100;

        sliderTrack.style.transform = `translateX(${offset}vw)`;
    }

    setInterval(nextSlide, intervalTime);
});