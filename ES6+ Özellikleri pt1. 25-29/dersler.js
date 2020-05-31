/* ECRO SRİPT6+ özellikleri
-------------------------------------------------------------------------------------------------
//ARROW FUNCTİON = ecro spript6 ile gelen fonksiyonları yazmamızı kısaltabilen söz dizimi
arka planda yine fonksiyonlarımız oluşuyor arrow function ile daha kısa lşekilde yazılabilir

const merhaba= function(){
    console.log("merhaba");
}
merhaba();//bu şekilde fonksiyon tanımlayabiliriz arrow function ile daha kısa şekilde yazabiliriz

//arrow Function
const merhaba = () => {
    console.log("merhba");
}
merhaba();
//parametreli şekilde oluşturmak istiyorsak
const merhaba = (firstName,lastName) => console.log("merhba",firstName,lastName);
merhaba("murat","Aydın");//fonksiyonumuz tek parametre alıyorsa parantezlere gerek kalmıyor .
//fonksiyon içine tek işlem yapıyorsa süslü parantezlere de ihtiyaç olmaz

//cube örnek olarak ;
const cube = function(x){
    return x * x * x;
}
console.log(cube(4));

//arrow func ile
const cube = x => x * x * x;//tek işlem yapıp ve bu tek işlem return ise gerek yok
console.log(cube(4));
 -----------------------------------------------------------------------------------------------*/
 /*DESTRUCTİNG =  Destructuring assignment yine kod yazmayı çok pratikleştiren bir özelliktir. 
//Hem dizilerle hem objelerle kullanılabiliyor. Dizi ve objeyi toplu bir şekilde değişkenlere atmamızı sağlıyor.
//bu bizim eski yöntemimiz bunu destructing ile kısaca yapabiliriz
 
//arraylerde ve dizilerde destructing
let number1,number2;
 arr=[100,200,300,400];
 number1=arr[0];
 number2=arr[1];
 console.log(number1,number2);

 //Destructuring ile 1.yol
 let number1,number2;
 arr=[100,200,300,400];

 [number1,number2]=arr;//arraydeki 4 değerimizi buraya vermiş olduk
// [number1,number2]=[100,200,300,400]; bu kısımda da number1 0. indexi number2 ise 1.indexi almış oluyr

 console.log(number1,number2);
//Destructuring ile 2.yol
arr=[100,200,300,400];

const [number1,number2]=arr;
console.log(number1,number2);
//değişkenlerimizi array ile oluşturucaksak Destructuring ile yapabiliriz

//objelerde destructing
const number ={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
const {a,c,d} = number;//bunun sebebi ise isimlerini farklı vermemiz,objelere sıra sıra bakmıyor özelliklerine göre bakıyor
console.log(a,c,d);//yaptığımızda değeri bize underfine veriyor 
//aynı isim olarak verme3k istemiyorsak const{a:number1,c:number2}= number şeklinde 

//functionlarda destructing
 const getlangs = () =>["python","java","c++"];
 const [lang1,lang2,lang3]= getlangs();
 console.log(lang1,lang2,lang3); 
 
//obje 2 
const person={
    name : "mustafa murat",
    year : 1994,
    salary : 3000,
    showInfos : () => console.log("bilgiler...")
}//objemizi oluşturduk
const {name:isim,year:yil,salary:maas,showInfos:bilgilerigöster} = person;//objedekileri değişkene atarken {} kllanılır

console.log(isim,yil,maas);
bilgilerigöster();
*/ 
/*------------------------------------------------------------------------------------------------------------------------------
//spread operatör : aslında işlemlerimiz kısaltmak için kullandığımız bir adet operatör
const langs = ["python","java","c++"];

//console.log(langs[0],langs[1],langs[2]);//yanayana bir boşluk ile yazdırmak istersek
//bunu bu şekilde de yapabilirz
console.log(...langs);

//eski yöntemde
const langs2 = ["javascript","c#",langs[0],langs[1],langs[2]];

//spread operatör kullanırsak 
const langs2 = ["javascript","c#",...langs];
console.log(langs2);

//2.örnek olarak
const number =[1,2,3,4,5,6,7,8,9];//array oluşturdk
const [a,b] = number;//destructing ile arraydeki ilk iki değeri a ve b ye atamş olduk
//1 ve 2yi aldıktan sonra geri kalanı arraya atmak için
const [a,b,...number2] = number;
console.log(a,b);
console.log(number2);

//spread yönteminin en güzel kullanım kısmı ise
const addnumber = (a,b,c) => console.log(a+b+c);
const numbers =  [100,200,300];
//fonksiyonu kullanıp a b cyerine numberstaki sayıları kullanmak istioruz eski yöntemde numbers[0] tarzında yapılıyordu
addnumber(...numbers);//şeklinde spread operatörunu kullanırsak zaten değerleri tek tek göndermiş olucak
*/
/*-------------------------------------------------------------------------------------------------------------------------------
//FOR In ve FOR Of döngüleri
const obje={
    name:"mustafa",
    age:25,
    salary:3000
};//obje tanımladık
const langs =["python","c++","php"];//array tanımladık
const name = "mustafa";//string tanımladık

//for İn dongüsü

//obje de gezinme 
for(let prop in obje){//prop adında değişkenimiz var
console.log(prop);//her bir döndüğünde her özelliğe sahip oldu
//ancak değerimizi almadı bunu yapmak içinde 
console.log(prop,obje[prop]);//şeklinde string kısımlarını aldık
}//bu bizim gezinme işlemimiz

//Arraylerde gezinme
for (let indexarr in langs){
    console.log(indexarr);
    //o indexe eş değeri almak için
    console.log(indexarr.langs[indexarr]);
}//for in ile arrayın indexleri üzerinde gezinebildik

//String te gezinme : arraylerle aynı mantık olucak
const name = "mustafa";//string tanımladık
for (let index in name ){
    //console.log(index);//stringin idnexlerini verdi peki bu indexlere karşılık gelen kısmı istersek
    console.log(index.name[index]);
}
//For Of dongusu : coğu zaman for in yerine kullanılabilir ancak obje üzerinde gezinemşyoruz.array a benzeyen veri tipleri üzeinde gezinilebilir.nodelist gibi 
const obje={
    name:"mustafa",
    age:25,
    salary:3000
};//obje tanımladık
const langs =["python","c++","php"];//array tanımladık
const name = "mustafa";//string tanımladık

//obje de hata aldığını göstermek için ;
for(let value of obje){
console.log(value);
}//yaptığımızda bize typeerror verir For Of ile bu obje ğzerinde gezinemeyiz
 
//arrayde bu sefer index üzerinden değil değerler üzerinden gezinebilirz
for (let value of langs){
    console.log(value);
}
//string üzerinde gezinebiliriz
for (let karakter of name){
    console.log(karakter);
}
//bu for of u maps ile gelen diğer konularda da kullanabilicez

//console.log(index.name[index]);!!!!!!!!!!!!!!! bu işlemde hata alıyor
*/