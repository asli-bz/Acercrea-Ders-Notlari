let element = document.getElementById("form1")[0];//elementin idsini alıyoruz bu elementin 1.indexsini aldık yani 1.textbox
let element2 = document.getElementById("form1")[1];//elementin idsini alıyoruz bu elementin 2.indexsini aldık yani 2.textbox


function degerlerial(){
   let deger1;//değişken tanımladık elementini aldığımızın value yu göstermek için
   let deger2;
    deger1 = element.getAttribute("value");//1.indexi değişkene attık getAttribute fonksiyonu, parametre olarak aldığı özelliğe ait değeri verir.
    deger2 = element2.getAttribute("value");//2.indexi değişkene attık
    alert(deger1+deger2);//alertle göstermek istediğimiz için
    //alert : ekran uyarı penceresi
}
console.log(element);

