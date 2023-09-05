const slider = document.querySelector('[data-slider]');
const prevButton = document.querySelector('[data-prev]');
const nextButton = document.querySelector('[data-next]');
const itemWidth = document.querySelector('[data-slide]').clientWidth;
const numOfItems = 5;

function scrollToNextItem(){
  slider.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
}

function scrollToPrevItem(){
  slider.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
  
}

nextButton.addEventListener('click', scrollToNextItem);
prevButton.addEventListener('click', scrollToPrevItem);