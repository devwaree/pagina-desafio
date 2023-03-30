var translateValue = 0;

function moveSlide(e, direction) {
  var carousel = document.querySelector(".testimonials__content__carousel");
  var slides = document.querySelectorAll(
    ".testimonials__content__testimonial"
  ).length;
  var threshold = slides * 1000;

  var hasReachedMaxLeft = translateValue === 0;
  var hasReachedMaxRight = translateValue === threshold - 1000;

  if (direction === "left" && !hasReachedMaxLeft) {
    translateValue = translateValue - 1000;
  }

  if (direction === "right" && !hasReachedMaxRight) {
    translateValue = translateValue + 1000;
  }

  carousel.style.transform = "translateX(-" + translateValue + "px)";
}
