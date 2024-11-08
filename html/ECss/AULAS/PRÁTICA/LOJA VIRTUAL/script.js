let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }

    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
