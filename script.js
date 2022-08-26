let slides=document.querySelectorAll('.slide-container');
let index=0;
function next(){
    slides[index].classList.remove('active');
    index=(index+1)% slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index=(index-1 + slides.length)% slides.length;
    slides[index].classList.add('active');
}
let flag=0;
slideshow(flag);

function slideshow(num){
    let slides=document.getElementsByClassName('slice');
    slides[num].getElementsByClassName.display="block";


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.slide-container');
  let dots = document.querySelectorAll("slider-indicator");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slider-indicator.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
}