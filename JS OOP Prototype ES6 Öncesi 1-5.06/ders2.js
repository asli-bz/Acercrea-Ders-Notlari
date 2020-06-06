/* OBJECT CREATE METODU
//object create : obje oluştururken prototpe ni başka bir objeden almasıdır
 
const obj = {
    test1:function(){
        console.log("test 1");
    },
    test2:function(){
        console.log("test 2");
    }
}
//console.log(obj);//objemized 2 metod ekledik

//yeni bir obje oluşturduğumuzda  proto özelliği bu kısmı göstersin
 const emp = Object.create(obj);//yeni obje oluşturduk proto özelliğii ile diğer objeye bağladık diyebiliriz
 emp.name="mustafa";
 emp.age=25;
 console.log(emp);//prototype ları bağlamış olduk

//örnek 2
function Person(){//constracter

}
Person.prototype.test1= function(){
console.log("test 1");
}
Person.prototype.test2= function(){
    console.log("test 2");
}//bu kısmı başka bir prototypa ile bağlamak iin

function Employee(name,age){
 this.name= name;
 this.age= age;   
}

Employee.prototype=Object.create(Person.prototype);//employe prototype ın proto özelliği person prototype dan olsun
Employee.prototype.mytest = function(){
    console.log("mytest");
}
const emp = new Employee("mustafa",24);
console.log(emp);
emp.test1();
 */
//----------------------------------------------------------------------------------------------------------------------------------------------
 /*CALL APPLY BİND FONKSİYONLARI
 call ve apply fonksiyon görevleri aynı olsa da kullanımlarında ufak farklar olabilir

//call
const obj1={
    number1:10,
    number2:20
};
const obj2={
    number1:30,
    number2:40
};//iki adet obje tanımladık

function addNumber(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}
addNumber.call(obj1,100,200);//ilk argüman olarak birtane obje olması gerekmekte ve burada obj1 e göre 
addNumber.call(obj2,100,200);//bu sefer de functiondaki this kısmı window objesi değilde bizim göndermiş olduğumuz objede oluyor
//call fonksiyonu ile fonksiyonumuzu istediğimiz obje ile çağırabiliyoruz

//apply : call ile birebir aynı işlem fakat yapısı farklı
const obj1={
    number1:10,
    number2:20
};
const obj2={
    number1:30,
    number2 : 40
};//iki adet obje tanımladık

function addNumber(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}
addNumber.apply(obj1,[100,200]);//yine ilk argüman olarak obje vermemiz gerek fakat argüman listesi olarak array şeklinde vermeemiz gerekmekte
addNumber.apply(obj2,[100,200]);//başka constacter çağırmak içinde bunları kullanabiliriz

//bind : bir fonksiyonu objeye bağlayabiliyoruz.farklı farklı objeleri bağlamaya çalışıyoru
function getnumbertotal(number3,number4){
    return this.number1+this.number2+number3+number4; 
    //bind fonksiyon bize bir fonksiyon kopyası olarak veriyo genelde eventte kullanılıyor
}//this anahtar kelimesi karıştırıldığında kullanılır
//apply ve call bize faxladan bi fonksiyon üretmezken , bind bize kopya bir fonksiyon üretiyor 

const copyfunc1 = getnumbertotal.bind(obj1);//obj1 e göre bir adet getnumbertotal fonksiyonundan kopya fonksiyon oluşmakta
 
const copyfunc2 = getnumbertotal.bind(obj2);

console.dir(copyfunc1);//daha detaylı şekilde görmek için dir kullanılır

console.dir(copyfunc2);

//kopya olduğu için istediğimiz yerde kullanabilir 
 console.log(copyfunc1(100,200));
 console.log(copyfunc2(100,200));
 
*/
