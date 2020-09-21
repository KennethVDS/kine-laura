var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

try{
  document.createEvent("TouchEvent");

  // Here we're ensured touch capabilities
  var scroll = document.getElementById('slideshow-swipe');
  var start = null;
  var clickIfEnd = true;
  scroll.addEventListener('touchstart', function (e) {
    start = e.touches[0].pageX;
    clickIfEnd = true;
    e.preventDefault();
  }, false);
  scroll.addEventListener('touchmove', function (e) {
    this.scrollLeft = start - e.touches[0].pageX;
    clickIfEnd = false;
    e.preventDefault();
  }, false);
  scroll.addEventListener('touchend', function (e) {
    if (clickIfEnd) {
      if (e) {
        clickIfEnd = e.target;
        // Add a delay before treating this as a click, in case it was accidental
        setTimeout(arguments.callee, 100);
      } else {
        // clickIfEnd is the element that was clicked!
      }
    }
  }, false);
} catch(e){}