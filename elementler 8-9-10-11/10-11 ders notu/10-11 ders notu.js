/*Dinamik-----element----oluşturma----
//son card bodynin en altına bir child daha eklemeye çalışcaz
 
// yeni element oluşturma 

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>  örnek olarak             
               
const newlink = document.createElement("a");//a elementioluşturduk
//const cardbody = document.getElementsByClassName("card-body");//burada yeni elementi nereye koyacaksak çağırıyoruz burada bize 2 element gelicek
const cardbody = document.getElementsByClassName("card-body")[1];//yeni elementimizi 2.child a koyucaz

//oluşturduğumuz yeni elementi seçtiğimiz element içine atmaya çalışıcaz
newlink.id="clear-todos";//id verdik
newlink.className="btn btn-primary";//class name verdik
newlink.href="https://www.google.com.tr";//href özelliği verdik
newlink.target="_blank";
// yeni elementimizi oluşturduk ancak text yok ekleyelim
//text content
//cardbody.textContent ="farklı sayfaya git";//güvenli bir yöntem değildir.a etiketi içinde başka etiketlerde olursa biz bunlara text content yaparsak sadece kısaca geçicektir.her zaman kullanmak mantıklı değil
//console.log(cardbody);//card body içinde fazla child olduğu için textcontent kullanırsak tüm hespi gidicek textcontente yazdıkları yer alıcak

// card bodynin son çocuğu olarak eklemek istersek text node ile ekleriz.text node element gibi çocuk olarak eklenir.html elementi değil aslında elementin başına sonuna her yerine eklenebilir
//const text = document.createTextNode("merhaba");//card bodynin en sonuna yerleştirmek içim
//cardbody.appendChild(text);//son childen sonra eklemeye yarar.
//element içine bir text eklceksek bunu textnode ile eklemek
 
newlink.appendChild(document.createTextNode("farklı sayfaya git"));//elementimizi ekledik ancak henüz card body içerisine geçmedi
cardbody.appendChild(newlink);//oluşturduğumuz elementi cardbodynin son çocuğu olarak ekledik

console.log(newlink);//elementimiz oluştu bunu en son ekranda göstermek için kullandık

//----dinamik-----element----silme------
const todo = document.querySelector("ul.list-group");//list elementlerini çağırdık
const tdo = document.querySelectorAll("li.list-group-item");//tüm li etiketlerini html collectiona atamak için birden fazla çeçiceğimizden dolayı selectorAll kullandık
//li lerimizi taşıyan todolist 
//remove metodu ile elementleri kolaylıkla silebiliriz

tdo[1].remove();//girdiğimiz id yi nodelistten kolaylıkla silebiliriz

//remove child
todo.removeChild(todo.lastElementChild);//silmek isteiğimiz çocuğu bu şekilde parantez içine alıp silebiliriz
todo.removeChild(tdo[3]);
//iki şekilde de yapabiliriz
console.log(tdo);
console.log(todo);

//element-------değiştirme---------
//replace
const cardbody = document.querySelectorAll(".card-body")[1];//cardbody elementinin 2. childini seçmiş olduk
//h5 yerine h3 elementi eklicez bunun için yeni element oluşturcaz
 
const newElement = document.createElement("h3");//yeni elementimizi oluşturduk
newElement.className = "card-title";//class ekledik
newElement.id="tasks-title";//elemente id ekledik
newElement.textContent ="yeni element" ;//elemente textbox verdik

//eski elementi seçicez
const oldElement = document.querySelector("#tasks-title");//değiştirceğimiz elementi seçiyoruz

cardbody.replaceChild(newElement,oldElement);//replace ile değiştirmek istediğimi elementlerş değiştirebiliriz.önce yeni element , sonra değiştircemiz elementi koyduk

console.log(newElement);//yeni elementimizide ekranda gösterdik*/
