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