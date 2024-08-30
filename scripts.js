// Function to initialize a carousel
function initCarousel(imgList, scrollLeft, scrollRight) {
    // Auto-scroll every 2 seconds
    let autoScroll = setInterval(() => {
        if (imgList.scrollLeft + imgList.clientWidth >= imgList.scrollWidth) {
            imgList.scrollTo({ left: 0, behavior: 'smooth' }); // Scroll back to start
        } else {
            imgList.scrollBy(750, 0); // Scroll to the right
        }
    }, 2000);

    // Pause auto-scroll on hover
    imgList.addEventListener('mouseenter', () => clearInterval(autoScroll));
    imgList.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            if (imgList.scrollLeft + imgList.clientWidth >= imgList.scrollWidth) {
                imgList.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                imgList.scrollBy(750, 0);
            }
        }, 2000);
    });

    // Manual scroll with buttons
    scrollRight.addEventListener('click', () => imgList.scrollBy(750, 0));
    scrollLeft.addEventListener('click', () => imgList.scrollBy(-750, 0));
}

// Initialize the first carousel
initCarousel(
    document.getElementById('imgList'),
    document.getElementById('scroll-left'),
    document.getElementById('scroll-right')
);

// Initialize the second carousel
initCarousel(
    document.getElementById('imgListt'),
    document.getElementById('scroll-leftt'),
    document.getElementById('scroll-rightt')
);
