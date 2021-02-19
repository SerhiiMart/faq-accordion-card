let values = document.querySelectorAll('input');
values.forEach(input =>{input.addEventListener('click', (x) => {
  values.forEach(input => { if(input.checked) {
      input.checked = false;
      x.target.checked = true;
    }
  })
})});

let boxmoved = document.getElementById('boxD');
let boxmain = document.getElementsByClassName('main__box');
let labels = document.querySelectorAll('label');
labels.addEventListener("mouseover", (event) => { 
    event.boxmoved.style.opacity = 1;
    event.boxmain.style.opacity = 0;
  });

