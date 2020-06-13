/*ES6 sınıf ile gelen statik metodlar
//STATİK METODLAR : eğer class içine statik metodlarımızı yazarsak obje oluşturmasak bile kullanabiliyoruz

class Matemaatik{
    cube(x){
        console.log(x*x*x);//normal bir metod
    }
}
const math = new Matemaatik();
math.cube(3);//cube metodunu kullanmak için bu şekil
console.log(Math);
//bazı durumlarda obje oluşturmadan metodumuzu kullanmak istersek belli metodları belli classlar içine statik şekilde yazarsak obje oluşturmadan kullanabiliriz

//obje oluşturmadan statik metodumuzu kullanmak için 
class Matematik{
   static cube(x){//durağan bir metod
        console.log(x*x*x);//normal bir metod
    }
}
Matematik.cube(3);//obje oluşturmadan bu metodu kullanabiliriz
//statik metodları obje üzerinden erişilemiyor.

//aslında öncesinde de biz statik metodları kullanmıştık mesela :  Object.create();//objectin içinde statik yazılmış 
*/
/*ES6 KALITIM

class Person{//baseClass : temel sınıf
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim : " + this.name + "yas: " + this.age);
    }
}
//es6 da yeni classı üretirken miras alma için
class Employee extends Person{//derivedClass : kalıtım türetilen sınıf
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age)//kullanarak temel sınıfın constracterını kullanmak için
        this.salary=salary;
    }

//miras aldığımız metodu değilde derivedclassın metodunu kullanmak istersek
showInfos(){//overriding
    console.log("isim : " + this.name + "yas: " + this.age + "maaş: " + this.salary);
   
}
toString(){//overriding
    console.log("Employee");
}
raissalary(amount){//classın içine ekstra metod ekleyebiliriz
    this.salary += amount;
}
}  
const emp = new Employee("mustafa",25,4000);
emp.raissalary(500);//ekstra metodu çalıştırmış olduk

// console.log(emp); //kalıtım sağlamış olduk,üst sınıfı miras almış olduk
// emp.showInfos(); //yaparak temel sınıfın metodunu kullanmış olduk

emp.toString();
emp.showInfos();//kendi metodumu kullanmış olduk miras alınan metodu değil kendi oluşturduğumuz metodu kllandık

//ES6 sınıflarını kullanarak efektli ve daha kompakt şekilde yazabiliyoruz
*/

