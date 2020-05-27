/* ECRO SRİPT6+ özellikleri
//Arrow function = ecro spript6 ile gelen fonksiyonları yazmamızı kısaltabilen söz dizimi
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
 */