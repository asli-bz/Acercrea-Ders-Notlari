/*oturumumuz açık kaldığı sürece depoladığımız veriler kalıyor
//sekmeyi kapatırsak yada tarayıcıyı kapatırsak bu veriler gider
//key value olarak verileri depolar

//console.log(window.sessionStorage);//session objemiz window objesi içerisinde bir objedir
//session obje kısmınına bu iki şekilde de ulaşabiliriz
//console.log(sessionStorage);


//ilk olarak sayfadaki elementleri seçtik

//buton----seçme
const ekle = document.getElementById("add");
const sil = document.querySelector("#delete");
const temizle = document.getElementById("clear");

//input---seçme
const addkey = document.querySelector("#addkey");
const addvalue= document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

//buton işlemlerini gerçekleştirmek için
ekle.addEventListener("click",addItem);//butonlara tıklama gerçekleştiğinde
sil.addEventListener("click",delItem);
temizle.addEventListener("click",clearItem);


 function addItem(){
     //addkeydeki değeerimizi alıcaz sonrasında addvaluedeki değeri alıcaz ve bunu session storage a eklemeye çalışıcaz
     sessionStorage.setItem(addkey.value,addvalue.value);
//ınput ile girilen değerleri alıyoruz ve bunları session storage a eklemiş oluoyurz
 }

 function delItem(){
sessionStorage.removeItem(deletekey.value);//remove ıtem a sadece bir key verilicek ve o keyi storage kısmında bulucak ve onu silicek
//bu değer ise ınput alanı olan deletekey kısmından gelicek
//delete içindeki değeri verirsek bu değeri silmiş oluruz
 //keylerden birine karşılık gelen bir value var aynnı key e başka bir value koymak istersek bu güncellenicektir
}

 function clearItem(){
sessionStorage.clear();//depodaki tüm verileri silmek için
 }
 //bu şekilde deopalama alanını kullanmış oluyoruz
 //sadece sekmede açık olduğu sürece veriler saklanıyor
*/
