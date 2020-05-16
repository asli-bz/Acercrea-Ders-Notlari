/*local storage sessionla nereyse birebir aynı tek farkı local storage içindeki verileri silmediğimiz sürece kapansada silinmez
//yapısı oldukça session a benziyor.key value değerleri ile depolanmakta.değerleimizi istersek applicatıon kısmından istersekte js tarafından silebilirz. aksi halde kalmaya devam eder

localStorage.setItem("hareket","burpee");//key valu kısmına  setItem ile değer atamak 
localStorage.setItem("tekrar","50");
//buradaki value ksımlarımız applicatıon localstorage kısmına STRİNG olarak eklenir
//biz burada sayı olarak yazsak bile bunu string olarak algılıyor

//sayı kısmını string olarak aldığını göstermek için 
//key'e--göre--değeri---alma 
//getItem
const value = localStorage.getItem("tekrar");//key çağırdık 
console.log(value);//seçtiğimiz key in değerini göstertdik
console.log(typeof value);//değerin tipini görmek için

//clear----local----steroga--- aslında session storage de kullanılan clear() kullanılabilir
localStorage.clear();
console.log(localStorage.getItem("sport"));//get item ile bir key i sorguladık
if(localStorage.getItem("sport")==null)
{
    console.log("sorgulanan veri bulunmamıştır");
}
else{
console.log("bulunmuştur");
}

//Local--storage--array---ARRAY--şeklinde----yazma
//local storage'e bir tane array yazdırmak için farklı bir yontem denemek gerekiyor.çünkü local stroga STRİNG DEĞER KABUL EDİYOR
const todo =["todo1","todo2","todo3"];
localStorage.setItem("todos",todo);//local storage e yazdırdık arrayı
//bu kısımda aslında sanki array yazar gibi yazmak istiyoruz fakat burada her elemanı alıp stringe çevirdi

//array olarak almak array olarak yazdırmak için
const todo =["todo1","todo2","todo3"];
localStorage.setItem("todos",JSON.stringify(todo));

//array olarak yazdırdık peki bunu array olarak nasıl kullanıcaz

const value =JSON.parse(localStorage.getItem("todos"));//JSON.parse kullanarak array şeklinde gösterebildik
console.log(value);

//ORNEK OLARAK 
//todolistte yazdığımız değerleri bir arraya atıcaz arrayden de local storage de göstircez
//form içindeki ınputtaki değeri alıp tekrardan yazmak istiyoruz bunun için submit olayı olmalı 
const form = document.getElementById("todo-form");
const todoınput = document.getElementById("todo");//bu şekilde ikisini de almış olduk

form.addEventListener("submit",addtodo);

function addtodo(e){
 const value = todoınput.value;//inpttan değeri aldık
 //aldığımız değeri array olarak yazmak istiyoruz
//Ancak şöyle bişey var eğer o array local storage mizde var ise onu alıp sonrasında bu değeri eklememiz gerek 
//eğer o key imiz yok ise onu oluşturmamız gerekir
let todos;
if(localStorage.getItem("todos")==null){
todos = [];

}
else{
    todos =JSON.parse (localStorage.getItem("todos"));
}

todos.push(value);
localStorage.setItem("todos",JSON.stringify(todos));

//JSON.stringfy = arrayi string formatına çevirir(obje görünümünde)
e.preventDefault();//submit olayı olduğunda kendi sayfamıza gidiyorduk ancak bunu engellemek için preventDefault kullanıyorduk
}*/
