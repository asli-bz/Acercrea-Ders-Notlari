var i = 0;
function move() {
  if (i == 0) {
    i = 0;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame(){
      if (width >= 10) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
/*function move2() {
    var elem = document.getElementById("myBar");   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 10) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("label").innerHTML = width * 1  + '%';
      }
    }
}*/