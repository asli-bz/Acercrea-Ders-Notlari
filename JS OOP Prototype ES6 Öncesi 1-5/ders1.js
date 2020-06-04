/*CONSTRUCTER VE OBJE OLUŞTURMA 

//server kısmını kullanmak için sadece DOM bilmek gerekmiyor . bunun iççin de constracter ve objeyi öğrenmemiz lazım
//burada obje oluşturabiliyor , bu objelerle başka obje tanımlıyabiliyoruz
//NESNE YÖNELİMLİ PROGRAMLAMA
 console.log(window);//window objesinin bir çok özelliği bulunuyor
console.log(this);//bu this şuan da üzerinde bulunduğumuz objeyi gösteren anahtar kelime GLOBAL scope da en temel obje window obje olduğu için çalıştığında window objesi geliyor
//kendi objemizi luşturuken 

const emp1={//bu yapı js de object literal
    name : "mustsfa",
    age:23,
    ShowInfos : function(){console.log("bilgiler gösterildi");}
};
const emp2={// bunu birden fazla oluşturmak isteyince bu şekilde yapmak çok mantıklı bir yöntem değil
    name: "elaa",
    age:16
};
emp1.salary = 400;//daha sınradan objelere değer atabiliyoruz
emp1.ShowInfos();
console.log(emp1);

//constructer
function Employee(){//bir adet yapıcı fonksiyon
    this.name = "mustafa";
}
const emp1 = new Employee();//kendi oluşturduğumuz objeden new anahtar kelime ile tekrar obje oluşturmuş oluyoruz
const emp2 = new Employee();
console.log(emp1);
console.log(emp2);
// bu şekilde yaptığımızda oluşturduğumuz yapıcı fonksiyondan obje mizde name özelliği hep aynı mstafa bunu yapıcı fonksiyona başka özellik gönderince farklı objeler gönderebiliriz


//tekrardan constructar oluşturalım 
function Employee(name,age,salary){
this.name= name;//thisdeki name i name e eşitledik
this.age = age;
this.salary= salary;

this.showInfos = function(){//yapıcı fonksiyon içine oluşturduğumuz objelerin function oluşturma

    console.log(this.name,this.salary,this.age);
}
}

const emp1 = new Employee("mustafa",23,3000);//yapcı fonksiyondan obje oluşturduk
const emp2 = new Employee("ela",16,200);

emp1.showInfos();
emp2.showInfos();
//yapıcı fonksiyon içine bu objelere özellik ve method ekleyebiliyoruz 
//bir adet objeden yeni objeler falan oluşturabiliyoruz
*/

/*PROTOTYPE
protottyype javascriptin  diğer dillerden farkı var ! diğer diller class tabanlı dil iken javacsript prototype tabanlı bir dildir.classlar bulunmamaktadır. class şeklinde yazılım olsa da arka tarfta prototype gönderilir
her bir obje de kendi içerisinde bri obje oluyor.

const object = new Object();//en temel obje object literal
const object2 = new Object();//ikinci objemizde de ortsk metodla vardır bu ortak metodları prototype içine yazılır
object.name= "mustafa";
//her objemizin birtane prototype öxelliği vardır  
console.log(object);

//en temel obje object
function Employee(name,age){
this.name = name;
this.age= age;
  this.showInfos = function(){
   console.log("bilgiler");
  }
}
const emp1 = new Employee("mustsfa",25);

console.log(emp1);
console.log( emp1.toString());//object prtotype içerindeki tostringten geldi bu olaya prototype chain denir(prototpye zinciri)
//zincirleme şekilde objelerimizi oluşturuyoruz.bu şekilde en temel prototype yazılan metodları miras olarak almış oluyoruz.aslında objeler arası kalıtım yapmış oluyoruz
*/