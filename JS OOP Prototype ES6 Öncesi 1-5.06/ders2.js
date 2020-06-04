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
