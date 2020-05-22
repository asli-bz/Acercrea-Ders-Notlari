let sec1 = document.getElementById("div1");
let sec2 = document.getElementById("div2");

let btn1=document.getElementById("buton1");
let btn2=document.getElementById("buton2");

let tur1=document.getElementById("tur");
let tur2=document.getElementById("tur2");
let a=document.getElementById("metin");
let b=document.getElementById("oy");
sec2.style.display="none";

function oyla(){
tur1.style.width="60%";
tur1.textContent="%60";
tur2.style.width="40%";
tur2.textContent="%40";
a.appendChild(b);
btn1.style.display="none";
btn2.style.display="none";

sec2.style.display="block";
}
