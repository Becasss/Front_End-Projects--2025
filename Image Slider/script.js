let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = (currentIndex + direction + totalSlides) % totalSlides;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%`
}

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);