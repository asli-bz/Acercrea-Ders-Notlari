/*es6 ile obje oluşturma göreceğiz
ES6 dinamik olarak kodlama dili çıkartmak için 
javascript ortaya çıkmış bunun yeni sürümü olan ES6 şuan 
resmi ismidir. kodlarımızı kolaylaştırmak için ortaya çıkmıştır yeni sürümü 
arka da kodlarımız aynı şekilde çalışsada ön tarafta kodları yazdığımız kısımda
daha da basitleştirilmek için çıkmıştı

*/
/*ES6 İLE SINIFLAR 
es6 sınıflarına syntactic sugar denmektedir
eski yöntemle obje oluşturcaz

function Employee(name,age,salary){
this.name = name;
this.age=age;
this.salary=salary;
}
Employee.prototype.showInfos = function(){
    console.log("isim" + this.name+"yas "+ this.age+"maas"+this.salary);
}

const emp = new Employee("mustafa",25,4000);
console.log(emp);//ES6 dan önce


//yeni yöntem
class Employee{//ES6 ile sınıf kullanarak obje tanımlama işlemini yapmış olduk
    constructor(name,age,salary){
       this.name=name;
       this.age=age;
       this.salary=salary;
    }
    showInfos(){//class içinde yazarsak prototype a kendisi eklicek zaten
    console.log(" isim:" + this.name + " yas:" + this.age + " maas:" + this.salary);
    }
}
const emp = new Employee("mustafa",23,4000);//bu lekilde yapınca yine arka planda aynı fakat sadece yazım yöntemi değişiyor
// console.log(emp);
emp.showInfos();
*/