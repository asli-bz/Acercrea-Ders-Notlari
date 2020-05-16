//2.ekran için
const mail = document.getElementById("mail");
const sifre=document.getElementById("password");
//buton için
const kaydet = document.getElementById("save");
//tıklandığında
kaydet.addEventListener("click",saveItem);
function saveItem(){
    sessionStorage.setItem("mail",mail.value);
    sessionStorage.setItem("şifre",sifre.value);
   if(sessionStorage.getItem("mail")==="" || sessionStorage.getItem("şifre")===""){
     alert("kaydetmek için doldurun");
   }
   else{
       alert("başarıyla kaydedilmiş");
   }
}