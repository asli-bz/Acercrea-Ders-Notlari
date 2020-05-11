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

console.log(newElement);//yeni elementimizide ekranda gösterdik

//Dinamik---attribute----değiştirme---silme---ekleme--
//inputu kullanarak yapabiliriz
 const ınput = document.getElementById("todo");//elementi idye göre çağırıyoruz

  let element ;//değişken tanımladık
 element = ınput;//çektiğimiz elementi değişkene atıyoruz
 element = ınput.classList;//kaç class var bunları list şeklinde görebildik
 
 //formcontrol classının yanına 2tane daha class eklicez
 //ınput.className="form-control newClass";//1.yol
ınput.classList.add("newClass");//yeni class eklemek 2.yol
ınput.classList.add("newClass2");

//form control classını çıkabiliriz
//ınput.classList.remove("form-control");
//element = ınput;

//placeholdera nasıl bakabiliriz
element = ınput ;
element = ınput.placeholder;//1.yol,
element = ınput.getAttribute("placeholder");//2.yol bu şekilde placeholder özellğine bakabiliriz

//bu placeholder kısmını değiştirmek istiyorsak
ınput.setAttribute("placeholder","selaaaamm");//placeholder daki yazıyı bu şekilde değiştirmiş olduk
element = ınput;//değiştirdiğimiz kısmı görmek istediğimizde

//bu ınputa yeni bir attribute(özellik) ekleyebiliriz
ınput.setAttribute("title","input");//title özelliği ekledik ve buna ınput değerini verdik
element = ınput.hasAttribute("name");//bu komutla da bu attribute de bu varmı tarzında kontrol yapabiliriz
//eğer "" içinde yazıdğımız özellikte var ise true yok ise false çeviricek

//elementimizin özelliğini kaldırmak istersek
ınput.removeAttribute("name");
element = ınput;

console.log(element);*/
