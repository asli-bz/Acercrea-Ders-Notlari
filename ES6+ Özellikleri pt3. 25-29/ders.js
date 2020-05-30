
/*-------REFERANS TİPLERİ-------------------------------------------------------------------------------
refeerans tipleri bellekte belli verileri tutan yer idi
bir adet değişkende referans tipidir

let a ="mustafa";
let b = "mustafa";//bunlar değer tiplerimiz

if(a === b){
    console.log("eşit");
}//bu şekilde kıyaslama yapıldığı için primitive veri tipi olduğu için içindeki verileri kontrol ediyor

//referans tipi ile yaparsak ;
let array1 =[1,2,3,4,5];
let array2 =[1,2,3,4,5];

if(array1 ===array2){
    console.log("eşit");
}//referans tiplerinde kontrol ettirken içindeki değere bakmaz,bellekte aynı yeri gösteriyormu diye bakar
//referans tiplerinded değer değil bu değerlerin tutlduğu adres kontrol edilir dikkate alınır

map.set([1,2,3],"array")//buraada array oluşuyor
console.log(map.get[1,2,3]);//burada da sorguladığımızda oluşan array oluyor bu yüzden bellekte faklı yerleri gösteriyorlar bundan dolayı dönen değerde underfined
 //eğer bellekteki yerde deer sorgulamak idtersek
const map = new Map();
const key=[1,2,3];
 map.set(key,"array");
 console.log(map.get(key));//bu şekilde yapıldığında ise bellekte aynı yerde sorgulamayı vs yapabilirz
*/
//--------------------------------------------
/*ES6+ set özelliği :set = kümeler, oldukça da arraylere benziyor 
set: bir değeri bir defa taşıyor.

 const myset=new Set();
 
 myset.add(100);
 myset.add(100);//ilk tanımlandığında aldı ancak 2.de almadı
 myset.add("mustafa");
 myset.add(true);//boolen deger
 myset.add([1,2,3]);//referans değer
 myset.add(3.4); 
 myset.add({a:1,b:2});//obje değer
 //setlerimizi oluşturduk

//ARRAYDEN SET oluşturma
 const myset2 = new Set([100,2.14,"mustafa"]);
 console.log(myset);
 console.log(myset2);
 //Size : satır içi eleman map gibi
 console.log(myset.size);
 //Delete : 
 myset.clear("mustafa");
 
 //Has : bir adet değer verip o değer küme de var  mı sorgulayabilirz
 console.log(myset.has("mustafa"));
 console.log(myset.has(2.14));
  //arrayi sorgulamak için burada verdiğimiz 2 farklı obje olduğu için false değer

  //For Each ile gezinme
  myset.forEach(function(value){
      console.log(value);
  });
  
  //istersek for of döngüsünü de kullanabiliriz
 for(let value of myset){
console.log(value);
 }//ister foreach ister for of

//SETTEN ARRAY OLUŞTURMA
const array = Array.from(myset);
console.log(array);

 */