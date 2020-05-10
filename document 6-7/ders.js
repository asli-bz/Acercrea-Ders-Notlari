//window object 

//console.log(document);//this yerine console.log(window); şeklinde de kullanabiliriz.
//-----document--- konusu
/*let value;
value=document;
value=document.all;
value=document.all.length;//html sayfasında kaç tane element olduğunu görebilirz.44 tane element olduğunu göreiliyoruz.
value = document.all[0];//elementlerin [i] içerisine yazılan kaçıncı indeksine bakabiliyoruz.
value = document.all[9];//elementin 9.indeksini gösterdik
value = document.all[document.all.length-1];//bu da bize son elementimizi göstermeye yarıy9r.
//console.log(value);//document içindeki elemnetleri bu şekilde görebiliyoruz*/


//---document--for-----------------------
/*const elements=document.all;//html collection object
for( let i =0;i< elements.length;i++){
console.log(elements[i]);// bu şekilde html collection üzerinde gezilebilir
}
console.log(elements);//bu kısım bize html collectionu vericektir.*/

//---foreach--hatası-------------------------
/*bu element üzerinde foreach kullanabiliyormuyuz ona bakalım
const elements = document.all;
elements.forEach(function(element){//burada fonksiyon gönderiyoduk ,js sonrassında element gönderiyor

  console.log(element); //yazdırabiliriz.buradaki element html collection
}); type hatası vermekte bu elements üzerinde foreach uygulayamayız
 html collection üzerinde for kullanabilirz fakat foreachi kullanamayız.*/

//--document--foreach--kullanmak--için----------------
/*kullanmak için document.all u arraylere çevireblirz bunu nasıl yapıcaz
 const elements = document.all;
const collections = Array.from (document.all);
console.log(typeof collections);//arraya çevirdikten sonra burada foreachi kullanabiliriz

collections.forEach(function(collection){
    console.log(collection);
});// foreach ile html collection üzernde gezinmek istersek ilk önce arraya çevirmemiz gerekir*/

//---body---head---location----özellikleri--------------
//documentin body özelliği de var.
/*value = document.all[8];//body ye erişmek için html collectiondan 8.indeksini yaparsak erişebilirz
value = document.body;// şeklinde yaparsak yine body etiketini gösterebilirz
value = document.head;//bu şekilde de head kısmını görebiliriz
value = document.location;//bu objenin içindeki özellikleri kullanabiliriz
value = document.location.hostname;
value = document.location.port;// bunlara şu şekilde de erişebilirz
value = document.URL;//koddaki tüm url leri gösterir

value = document.characterSet;//characterseti görmek istediiiğimizde
console.log(value);*/
//-----scripts-------------------
/*let value;
value = document;
//ilk önce script etiketleri 
value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];// scripts 0. indexsini görebiliriz 
*/

//--------linkler----------------
/*value = document.links;//5 tane link olduğunu görebilirz
value = document.links[0];//0.indexi görebiliriz
value = document.links[document.links.length-1];//son link etiketini grebiliriz
value = document.links[document.links.length-1].getAttribute("class"/*fonksiyonun class özelliğini almak istersek);//buna fonksiyon kullanabşliriz
value = document.links[document.links.length-1].getAttribute("href"/*fonksiyonun href özelliğini almak istersek);
value = document.links[document.links.length-1].className;//şeklinde aynı sonuca varabildik
value = document.links[document.links.length-1].classList;//classları ayrı aayrı görmek istersek
console.log(value);//çalıştığında clear todos btn btn-dark şeklinde gelmesi gerekirken sadece btn btn-dark geliyor
*/

//----------formlar-------
//sayfadaki formlara bakmak için 
 //value = document.forms;
//value = document.forms.length;
//value = document.forms[0];
//value = document.forms["form"/*form etiketimizin name i var ise */ ];//birden fazla form varsa ve name göre seçmek istersek
//value = document.forms[0].id;//id sine göre almak istersek
//value = document.forms[0].getAttribute("id");
//value = document.form[0].name;
//value = document.forms[0].getAttribute("name");//formda name e bu şeklde de erişebilriz
//console.log(value);