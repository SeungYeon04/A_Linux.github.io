function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    slides.forEach((slide, index) => {
        if(slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });
    const newIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add('active');
}
