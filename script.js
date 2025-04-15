document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".project-slide");
    const totalSlides = slides.length;

    function updateSlide() {
        document.querySelector(".project-slides").style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    window.moveSlide = function(step) {
        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        updateSlide();
    };

    // Mobile menu toggle
    document.querySelector(".menu-toggle").addEventListener("click", function() {
        this.classList.toggle("active");
        document.querySelector("nav ul").classList.toggle("show");
    });
});
