// For the modal

// from: https://codepen.io/JamieBort/pen/PaoyQj

// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() { 
  modal2.style.display = "block";
}

btn3.onclick = function() { 
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
  modal2.style.display = "none";
}

span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == modal2) {
      modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
}
}

// For the copyright

var copyright = document.getElementById('copyright');
var d = new Date()
// document.write(d.getFullYear())
var a = d.getFullYear()
copyright.innerHTML=`&copy` + a