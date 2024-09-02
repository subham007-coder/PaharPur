// const carousels = document.querySelectorAll(".carousel");

// carousels.forEach((carousel, index) => {
//     const dots = document.querySelectorAll(".dots")[index].querySelectorAll(".dot");
//     let isDragStart = false, prevPageX, prevScrollLeft;
//     let autoSlideInterval;

//     const updateDots = () => {
//         const imgWidth = carousel.querySelector("img").clientWidth + 14;
//         const activeIndex = Math.round(carousel.scrollLeft / imgWidth);
//         dots.forEach(dot => dot.classList.remove("active"));
//         if (dots[activeIndex]) dots[activeIndex].classList.add("active");
//     };

//     const dragStart = (e) => {
//         isDragStart = true;
//         prevPageX = e.pageX;
//         prevScrollLeft = carousel.scrollLeft;
//         clearInterval(autoSlideInterval); // Stop auto-slide while dragging
//     }

//     const dragging = (e) => {
//         if (!isDragStart) return;
//         e.preventDefault();
//         let positionDiff = e.pageX - prevPageX;
//         carousel.scrollLeft = prevScrollLeft - positionDiff;
//         updateDots(); // Update dots while dragging
//     }

//     const dragStop = () => {
//         isDragStart = false;
//         autoSlide(); // Restart auto-slide after dragging
//     }

//     const autoSlide = () => {
//         autoSlideInterval = setInterval(() => {
//             const imgWidth = carousel.querySelector("img").clientWidth + 14; // Image width + margin
//             const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
//             if (carousel.scrollLeft >= maxScrollLeft) {
//                 carousel.scrollLeft = 0; // Loop back to start
//             } else {
//                 carousel.scrollLeft += imgWidth; // Slide to the next image
//             }
//             updateDots(); // Update dots after auto-slide
//         }, 2000); // Slide every 2 seconds
//     }

//     carousel.addEventListener("mousedown", dragStart);
//     carousel.addEventListener("mousemove", dragging);
//     carousel.addEventListener("mouseup", dragStop);
//     carousel.addEventListener("mouseleave", dragStop); // Stop dragging when the cursor leaves the carousel

//     dots.forEach((dot, dotIndex) => {
//         dot.addEventListener("click", () => {
//             carousel.scrollLeft = dotIndex * (carousel.querySelector("img").clientWidth + 14); // Jump to the selected slide
//             updateDots(); // Update dots after clicking
//         });
//     });

//     autoSlide();
//     updateDots(); // Initialize dots on load
// });
