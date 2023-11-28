const mygtukasElement = document.getElementById('mygtukas');
let isTopLeft = true;

mygtukasElement.addEventListener('click', function() { 
    mygtukasElement.classList.toggle('clicked');


  if (isTopLeft) {
    mygtukasElement.style.top = 'calc(100vh - 50px)';
    mygtukasElement.style.left = 'calc(100vw - 120px)';
  } else {
    mygtukasElement.style.top = '0';
    mygtukasElement.style.left = '0';
  }
  
  isTopLeft = !isTopLeft;
});