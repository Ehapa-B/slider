let slideLength = 1;
showSlides(slideLength);
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    if (n > slides.length) {slideLength = 1}
    if (n < 1) {slideLength = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideLength-1].style.display = "block";
}

// prev and next button
function plusSlides(n) {
    showSlides(slideLength += n);
}