var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

var imgListt = document.getElementById('imgListt');
var scrollRightt = document.getElementById('scroll-rightt');
var scrollLeftt = document.getElementById('scroll-leftt');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener('click', () => {
    imgList.scrollBy(750, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener('click', () => {
    imgList.scrollBy(-750, 0);
});

// Auto-scroll every 3 seconds (3000 milliseconds)
var autoScroll = setInterval(() => {
    imgList.scrollBy(750, 0);
}, 3000);

// Optional: Stop auto-scroll on hover and restart when not hovering
imgList.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
});

imgList.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        imgList.scrollBy(750, 0);
    }, 3000);
});


var autoScroll = setInterval(() => {
    // Check if we've reached the end of the scrollable area
    if (imgList.scrollLeft + imgList.clientWidth >= imgList.scrollWidth) {
        imgList.scrollTo({ left: 0, behavior: 'smooth' }); // Scroll back to start
    } else {
        imgList.scrollBy(750, 0); // Scroll to the right
    }
}, 2000);


// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRightt.addEventListener('click', () => {
    imgListt.scrollBy(750, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeftt.addEventListener('click', () => {
    imgListt.scrollBy(-750, 0);
});

// Auto-scroll every 3 seconds (3000 milliseconds)
var autoScroll = setInterval(() => {
    imgListt.scrollBy(750, 0);
}, 3000);

// Optional: Stop auto-scroll on hover and restart when not hovering
imgListt.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
});

imgListt.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        imgList.scrollBy(750, 0);
    }, 3000);
});


var autoScroll = setInterval(() => {
    // Check if we've reached the end of the scrollable area
    if (imgListt.scrollLeftt + imgListt.clientWidth >= imgList.scrollWidth) {
        imgListt.scrollTo({ left: 0, behavior: 'smooth' }); // Scroll back to start
    } else {
        imgListt.scrollBy(750, 0); // Scroll to the right
    }
}, 2000);
