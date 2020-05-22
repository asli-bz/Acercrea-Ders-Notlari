
var form1 = document.getElementById("ekran1");
var form2 = document.getElementById("ekran2");
var sekme1=document.getElementById("ilk");
var sekme2 = document.getElementById("son");

//1.ekran için
const ad = document.getElementById("ad");
const soyad= document.getElementById("soyad");
const yas = document.getElementById("age");
const dogum = document.getElementById("dogum");
//butonlar için

form2.style.display="none";
const devam = document.getElementById("next");
//tıklamalar gerçekleştiğinde

devam.addEventListener("click",addItem);
function addItem(){
    sessionStorage.setItem("ad",ad.value);
    sessionStorage.setItem("soyad",soyad.value);
    sessionStorage.setItem("yas",yas.value);
    sessionStorage.setItem("doğum",dogum.value);

    if(ad.value==="" || soyad.value==="" || yas.value==="" || dogum.value===""){
     alert("devam etmek için doldurun");
    }
    else{

        form1.style.display="none";
        form2.style.display="block";
    sekme1.className="bg-light";     
    sekme2.className="bg-dark";

       const once = document.getElementById("previos");
       once.addEventListener("click",prevItem);
       function prevItem(){
           form1.style.display="block"
           form2.style.display="none";
       }
        
       const mail = document.getElementById("mail");
       const sifre= document.getElementById("sifre");
       const tekrar = document.getElementById("sifretekrar");
       
      const son = document.getElementById("save");
      son.addEventListener("click",saveItem);
      function saveItem(){
       sessionStorage.setItem("mail",mail.value);
       sessionStorage.setItem("sifre",sifre.value);
       sessionStorage.setItem("tekrar",tekrar.value);

          if(mail.value==="" || sifre.value==="" || tekrar.value===""){
          alert("kaydetmek için doldurun");
       }
         else{   
            alert("kaydedilmiştir");
            }
      }
    } 
}