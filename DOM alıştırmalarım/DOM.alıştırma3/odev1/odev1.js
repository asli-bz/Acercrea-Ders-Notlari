//const form = document.getElementById("container");
//1.ekran için
const ad = document.getElementById("ad");
const soyad= document.getElementById("soyad");
const yas = document.getElementById("age");
const dogum = document.getElementById("dogum");

//butonlar için
const devam = document.getElementById("add");

//tıklamalar gerçekleştiğinde
devam.addEventListener("click",addItem);
function addItem(){
    sessionStorage.setItem("ad",ad.value);
    sessionStorage.setItem("soyad",soyad.value);
    sessionStorage.setItem("yas",yas.value);
    sessionStorage.setItem("doğum tarihi",dogum.value);
    if(sessionStorage.getItem("ad")==="" || sessionStorage.getItem("soyad")==="" || sessionStorage.getItem("yas")==="" || sessionStorage.getItem("doğum tarihi")===""){
       
     alert("devam etmek için doldurun");
    }
}

