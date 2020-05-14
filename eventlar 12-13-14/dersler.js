//Event-----listeners----ve--event---objesi-----
//tasarımımızda butona tıkladığında inputa girdiğimizde jsde belli eventler oluşuyor bizde bu eventleri alıp işlem yapıyoruz
//event listnerları öğrendikten sonra event obje öğrenicez
/*
//filter alanına erişmek, seçmek için
const ınput = document.getElementById("filter");//textboxsın ınputunu çağırdık .seçtik
//console.log(ınput);
//todo ınputuna bişeyler yadığımızda focus eventi çallışmaya başlar
//bu event i js de yakalayabiliriz nasıl olucak

/*1.yöntem 
ınput.onfocus=function(){//ınpuutumuzun focus eventi çalıştığında tıklandığında 
    console.log("naber");//ekranda naber gösterdi
} //eventimiz burada bir property yani çzellik*/

/*2.yöntem
//ilk olarak hngi event oluşucak onu yazıyoruz 
//bu event oluştupunda burda bir colbacck fonksiyon çalışıcak,bu event oluştuğunda fonksiyon çalıştırmak istiyorsak
//jsde bu eventı dqaha ayrıntılı öğrenmek için bize event parametresi göndermekte
ınput.addEventListener("focus",function(eventobject){ //event listener yapısını oluşturduk
//bu şekilde elementlerimize event atıyoruz
console.log(eventobject); //bu event üzerinden farklı  özelliklerini elde edebiliriz
//çalıştırdığımızda focusevent şeklinde yani event objes karşımıza gliyor
console.log(eventobject.type); //evetnin türünü 
console.log(eventobject.target);//eventin nerde oluştuğunu
console.log(eventobject.target.placeholder); //bu bize element vericek bu elementin placeholderini aldık
console.log(eventobject.target.className); //elementin classını görmek için
})*/

/*------farklı------bir----event-----yazmaya---çalıştık
const todoform = document.getElementById("todo-form"); //elementimizi çalıştırdık bu elementimizin event ına bakmak 
 todoform.addEventListener("submit",submitForm);//submit eventi çalıştığında submit form fonksiyonu çalışsın
 function submitForm(e){
 console.log("submit event");//bastığımız zaman kısa bi süre gösterip tekrar yeniliyor bunun sebebi
 //bu bir form olduğu için defult olarak sayfamıza gittiği için kısa süre gördükten sonra tekrar yenilendi
 //eğer form etiketine action="index.php" şeklinde verseydik de submiti görücektik tekrardan phpiye geldik 
 //formun default özelliğini yok etmek istiyoruz
 //bunun için e.preventDefault metodunu kullanıcaz bu metodu işlemlerimizin en altına ekliyoruz bi sorun çıkmasın fln diye
e.preventDefault();//bunu kullandığımızda sayfamızın yenilenmesini önkemiş oluruz
 }//bu metod sayesinde formun default özelliğini kaldırmış olduk
*/

/*--------KeyBoard------Eventleri-----*/
//documant üzerinde event oluşturucaz.document üzerinde herhangi bi yere tıklandığında eventlerı çğrenmek içn

/*keypress == klavyede herhangi bir harflere veya sayılara bastığımızda çalışan event
document.addEventListener("keypress",run);//event oluşturduk ve buna run fonksiyonunu atadık
 
function run(event){
console.log("merhaba");//document üzerinde klavyede harflere basıldığında eventımız çalıştı
console.log(event.key);//normal olarak karakter ifadsini görebiliriz
console.log(event.which);//ile klavyeden hangi tuşa bastığımımzı görebiliriz karakterlerimizin ascii tablosundan sayı değeri ile gösteriyor
 }// sadece harfler ve rakamlar event alıyor*/

/*keydown == klavye üzerindeki her tuşa bastığımızda event döndürmesi için keydown kullnılır
//tuşa bastığımız an event tetikleniyor
 document.addEventListener("keydown",event);
 function event(e){
  console.log(e.key);
 }*/

/*keyup == Bir tuşu bıraktığımız an bu event oluşuyor
document.addEventListener("keyup",event);
function event(e){
 console.log(e.key);
}*/

/*ornek olarak
//texte yazarken her tuşu bıraktığımda üsteki yazı da gğncellensin
let cardheader=document.querySelector(".card-header");//güncellenicek yazıyı aldık
let ınput = document.querySelector("#todo");//inputu aldık

ınput.addEventListener("keyup",changeText);//tuşu bıraktığmızda değeri alabiliyoruz
function changeText(e){
//console.log(e.key);
//şimdi ınput alanının değerini alıcaz önce bu evetn nerde oluşmuş bulamlıyız
//console.log(e.target);//e.target üzerinden bu elementin içindeki  yazısını almak istersek
console.log(e.target.value);//input içindeki yazıyı aldık

//bu değerleri yazı kısmına eklicez
cardheader.textContent =e.target.value;//yazı yı dinamik şekilde güncelledik
}*/

//KEYPRESS İLE KEYDOWN KEYUP UN FARKI KEYPRESSTE SADECE RAKAM VE HARFLER EVENT OLUŞTURURDU.
   //KEYDOWN DA ENTER YUKARI BOŞLUK TUŞLARI DA ALGILAR 
   //KEYUP TA İSE TUŞU BIRAKTIĞIMIZ AN OLUŞUR SADECE RAKAM VE HARFLERDE OLUŞUR

//------Mouse-----eventleri
/*ilk olarak cardbodyi seçip bunun üzerinde mouse eventini yapıcaz
 const cardbody = document.querySelectorAll(".card-body")[1];//cardbodynin 2.elementini aldık
 const title = document.querySelector("#tasks-title");

 /*click event==elemente tıkladığımız zaman
 title.addEventListener("click",run);
function run(e){
 console.log(e.type);
 }//eventimşizi bu şekilde çalıştırdık*/

 /*double click==çift tıkladnığı zaman çalışan event
 title.addEventListener("dblclick",run);
function run(e){
 console.log(e.type);
 }*/

 /*mousedown eventi  = click eventine benziyor .tıkladığımız zaman tıklamayı sürdüğümüz zman oluşuyor aynı keydown
 title.addEventListener("mousedown",run);
 function run(e){
  console.log(e.type);
  }*/

  /*mouseup = bu da aynı keyupa benziyor.tıklamadan elimizi çektiğimiz zaman
title.addEventListener("mouseup",run);
function run(e){
 console.log(e.type);
 }*/

 /*mouse over=elementin üzerinde geldiiğimiz zaman çalışıcak
 title.addEventListener("mouseover",run);
 function run(e){
  console.log(e.type);
  }
  //2.özelliği
  cardbody.addEventListener("mouseover",run);
  
  function run(e){
   console.log(e.type);
   }*/

/*mouse out=elementten çıktığğımız zaman 
title.addEventListener("mouseout",run);
function run(e){
 console.log(e.type);
 }*/

 /*mouse enter ve mouse leave
 cardbody.addEventListener("mouseenter",run);//sadece elementlere girdiğimiz zaman çalışıcak
 cardbody.addEventListener("mouseleave",run);//cardbodyden çıktığında mouseleave çalışıyor

function run(e){
 console.log(e.type);
 }/*
 */
/*----Input--eventler--
const filter = document.getElementById("filter");
//focus event
filter.addEventListener("focus",run);
//blur event
filter.addEventListener("blur",run);//odaktan çıktığı zaman çalışır
//paste = kopyalama event kopaylamadan ziyade yapıştırma
filter.addEventListener("paste",run);
//copy
filter.addEventListener("copy",run);
//cut event ==yazıyı kestiğimiz zaman oluşan event
filter.addEventListener("cut",run);
//select event ==seçme işlemi bittiğinde
filter.addEventListener("select",run);

function run(e){
console.log(e.type);
}*/

/*DOM content loaded
document.addEventListener("DOMcontentLoaded",load);//sayfeadki herşeyn yüklenmesi oluştuktan sonra event çalışıcal
function load(e){
    console.log("sayfa yüklendi");
}*/

/*EXPRESSİONS ---- DÜZENLİ-----İFADELER---
//düzenli ifadeler arama kriterleri oluşturmak 
düzenli ifadeler metin veri içinde arama yapmak ve değiştirmek için
/düzenli ifade/nitelik=aranacak kelimedir

metin içi arama yapabilmek için search

var metin = "Merhaba ben Yusuf";
var sonuc = metin.search(/yusuf/i);
alert(sonuc);
//metindeki kelimeyi değiştirme replace
var metin = "Merhaba ben Yusuf";
        var sonuc = metin.search(/yusuf/i,"aslı") ;
        alert(sonuc);*/






 



 



 

