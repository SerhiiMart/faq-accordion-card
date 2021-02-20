let values = document.querySelectorAll('input');
values.forEach(input =>{input.addEventListener('click', (x) => {
  values.forEach(input => { if(input.checked) {
      input.checked = false;
      x.target.checked = true;
    }
  })
})})

window.addEventListener("DOMContentLoaded", function() {
var boxmoved = document.getElementById("boxm");
var boxmain = document.getElementById("box");
boxmoved.style.visibility = "visible";
boxmain.style.visibility = "hidden";

var labels = document.getElementsByTagName("label");
var labelsList = Array.prototype.slice.call(labels);

labelsList.forEach(l=>{
  l.addEventListener("mouseenter", func);
  l.addEventListener("mouseleave", funks);
})
  
})

var func = function () {
  var boxmoved = document.getElementById("boxm");
  var boxmain = document.getElementById("box");
  boxmoved.style.visibility = "visible";
  boxmain.style.visibility = "hidden";
}

var funks = function () {
  var boxmoved = document.getElementById("boxm");
  var boxmain = document.getElementById("box");
  boxmoved.style.visibility = "hidden";
  boxmain.style.visibility = "visible";
}
