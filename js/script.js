console.log('Loaded');

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

//Use querySelector to select an object from the DOM (Document Object Model)
var btn = document.querySelector('.mobileNavBTN');
var menu = document.querySelector('.menu');

//Attach an event listener to the element, that listens for a click
btn.addEventListener('click', ()=>{
    menu.classList.toggle('hide');
});

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 610){
        btn.classList.add('hide');
        menu.classList.remove('hide');
    } else if(window.innerWidth < 610){
        btn.classList.remove('hide');
        menu.classList.add('hide');
    }
})