function swap() {
  var i, j;
  var x = document.querySelectorAll(".odd");
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("box-1");
    x[i].classList.toggle("box-2");
  }
  var y = document.querySelectorAll(".even");
  for (j = 0; j < y.length; j++) {
    y[j].classList.toggle("box-1");
    y[j].classList.toggle("box-2");
  }
}
