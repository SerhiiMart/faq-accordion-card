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
labels.addEventListener('mouseover', (x) => { 
    x.boxmoved.style.visibility = "visible";
  });
// function show(id) {
//   document.getElementById(id).style.visibility = "visible";
// }
// function hide(id) {
//   document.getElementById(id).style.visibility = "hidden";
// }

