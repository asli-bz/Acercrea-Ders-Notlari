/*lementleri seçme
//elementleri----id----göre---seçme----
let element;

element = document.getElementById("todo-form");// tırnak içerisine idye verdiğimiz ismi yazarsak websitemizde o idye ait olan kısmı çekmiş oluruz
element = document.getElementById("clear-todos");//idsine  göre elementi seçebilirz . buradaki element buton

//elementleri----class----göre--seçme----

element = document.getElementsByClassName("list-group-item");//list group item a ait 4 tane li etiketine ait class element olduğu için bize html colleciton şeklinde gelicektir.biz bunun ilkini yada sonuncusunu görmek istersek
element = document.getElementsByClassName("list-group-item")[0];//bu şekilde ilk li elementini class adıyla çağırmış olduk
element=document.getElementsByClassName("card-header");//div etiketinin classıyla elementi çağırmış olduk

//elementleri---etikete(tag)---göre--seçme--
element = document.getElementsByTagName("div");//div etiketlerini seçmemize yarar.classlarına bakmadan tüm divleri ,li leri alabilirz
element = document.getElementsByTagName("div")[0];//html collection şeklinde geldiğinde indeksini alarak seçebiliriz

//Query selector--ile--bu--3--methodu--tek--seferde--kullanabiliriz--tek bir element getiriyor

//id ile #
element = document.querySelector("#todo-form");//idlere göre query selector.sayfada bulduğu ilk elemnti seçer.idye göre kullanmak istediğimizde #
element = document.querySelector("#tasks-title");
//class ile . 
element = document.querySelector(".list-group-item");//query selector u classa göre kullanmak istediğimizde . ile
 //etiket ile ilk geleni alır
element = document.querySelector("li");
element= document.querySelector("div");

//sadece ilk bulduğu elemti değilde hepsini almak istiyorsak mesela li de ilk bulduğu li yerine hepsini istiyorsak
element = document.querySelectorAll(".list-group-item");//list group item a göre tüm elementleri seç dedik all kullandığımız için tüm list group itemları göstericektir.nodelist şeklinde gelir

//array lere benziyor. nodelist ile gelen elementlerin içinde gezinebiliriz foreach metohdu ile
element.forEach(function(fonk){
console.log(fonk);
})

//console.log(element);*/

/*elementeri--seçme-ve-style--özellşkleri--değiştirme---

const element = document.querySelector("#clear-todos");//butonumuzu id ile queryselectorle çektik bunu 
//const element = document.getElementById("clear-todos"); kullanarakta yapabilirim

//elementin özellikleri
console.log(element.id);//elementimizin idsine bakmak için
console.log(element.className);//seçilen elementin classına bakmak için
console.log(element.classList);//DOMtoken şeklinde özelliklerini yaszdırabiliriz
console.log(element.classList[0]);//ilk classı almak için kullanılır arraya benzeyen yapı olduğu için index alabiliriz.0 da ilk class btn 1 de btn dark gelmekte
console.log(element.textContent);//herhangi bir html etiketi almayacak sadece yazıları alaacaktır
console.log(element.innerHTML);//element içerisinde başka bir html etiketleri var ise bunu innerHTML ile çekebiliriz
console.log(element.href);//sayfanın href özelliğini görmek için
*/

/*element--ve--style--özelliklerini--değiştirme---
    elementin özellikleri>>
const element = document.querySelector("#clear-todos");//elementimiz burada buton
console.log(element.style);//style özelliğini yazdıralım aslında style bir obje elementin tüm css özellikleri geliyor

element.className = "btn btn-danger";// butonun özelliklerini kullandık.butonumuzun classını değiştirdik.btn btn-dark idi
element.style.color= "#000";// style ın özelliiklerini kullandık. buton textinin rengini değiştirdik
element.style.marginLeft="5px";//margin verebiliriz.
element.href ="https://www.google.com.tr";//href özelliği ile bi yere gitmesini isteyeniliriz
element.target="_blank";//verdiğimiz linki başka sekmede açmasını istediğimizde
 
    elementin textinin özellikleri>>
const element = document.querySelector("#clear-todos");//elementimizi seçtik
console.log(element.textContent);//elementin yazısı gelmiş durumda istersek bunu da değiştirebiliriz
element.textContent="Siliniz";//seçili olan elementin textcontent özelliği
//element.textContent ="<span>silin</span>" ;//dinamik olarak bir html eklemek istediğimizde normal yazı olarak gördük.html etiketi olarak görmek için inner html kullanıcaz
element.innerHTML="<span style='color:pink'>silin</span>";//bu sayaede butona dinamik olarak html ekledik innerhtml ile özellikkerini değiştirebilirz

// örnekk : li etiket elementinin hepsini çekiyoruz.foreach ile geziyoruz.ve textlerin rengini değiştiriyoruz
const elements = document.querySelectorAll(".list-group-item");//Nodelist şeklinde gelmektedir
elements.forEach(function(fun){
    fun.style.color="green";//renk
    fun.style.background = "gray";//arka plan rengi
})

//document object e elementlerin başka elementlerin çocuğu ul elementinin 4 tane li çocupu vardır
//child olayı
let elemens = document.querySelector("li:last-child");//li elementinin son çocuğunu göster
elemens = document.querySelector("li:nth-child(2)");//ikinci cocuk
elemens = document.querySelector("li:nth-child(3)");//üçüncü cocuk
elemens = document.querySelector("li:first-child");//ilk çocuk
elemens = document.querySelectorAll("li:nth-child(odd)");//birden fazla seçmek istersek tek sayılarrda oluyor 1 3 5. çocuk gibi
elemens = document.querySelectorAll("li:nth-child(even)");//çift çocuuklar 2 4 6 gibi
 //foreach ile gezinmek için çift sayıların özellikleri değişir
 elemens.forEach(function(funn){
funn.style.background = "#ccc";
funn.style.color ="red";
 })


console.log(elemens);*/

/*DOM(document)---elementleri---üzerinde---gezinme---

let value;
const todolist = document.querySelector(".list-group");//list grupu seçtik bize ilk li etiketini gösterdi biz bunun 2.sini istiyorsak
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");//classı hem card hemde row olanları çağırdık

value = todolist;
value = todo;
value = cardrow;
//çektiğimiz elementlerin DOMları üzerinde gezinicez

//todo-list child child method kullanıcaz
value = todolist.childNodes;//nodeList şeklinde 9tane geldi aslıjnda 4 childi vardı elementimizin textler nereden geldi önce bna bakalım
value = todolist.childNodes[0];//li lerde satır atlama olduğu için 9a ykselmiş.child nodes ta satır atlamaları da sayayır.
//sadece elementi almak için children özelliğini kullanıcaz
value = todolist.children;//sadece elementleri
value= todolist.children[0];//ilk child olan elementi alır
value = todolist.children[2].textContent="değiştirdik";//aldığımıız elementin textini değiştirebilirz

//cardrowun child lerinda gezinme
value = cardrow;
value = cardrow.childNodes;//textlerde dahil
value = cardrow.children;//sadece elementler
//card body childe gidip onun childlerina bakıp h5etiketini değiştirmek istersek
value = cardrow.children[2];//cardrowun 2.çocuğunu aldık.2.childin da çocuklarına bakmak için
value = cardrow.children[2].children;//cardrowun torununu almış olduk birnevi çocuğunun çocuklarına baktık
value = cardrow.children[2].children[1].textContent="burası da değişti";//cardrowun torunun textini değiştirdik

//tekrardan todolistini alırsak
value = todolist;
value = todolist.children[0];//todolistin ilk childa eriştik bunun yerine
value = todolist.firstElementChild;//şeklinde de yapabiliriz
value = todolist.lastElementChild;//son çocuk
value = todolist.children.length;//kaç çocuğu bvar bakabilirz
value = todolist.childElementCount;//kaç çocuğu var bu şekilde de bakabiliriz

//ebevynlerine bakmak için
value = cardrow;
value = cardrow.parentElement;//ebevynini bulmak için
value = cardrow.parentElement.parentElement;//bu şekilde bir üstünü alarak istediğimiz elementi görebiliriz

//element kardeşlerini bulmak istersek
value = todo;//bu ikinci elementimiz bunun 1. todo kısmına gidebiliriz
value = todo.previousElementSibling;//element kardeşine gitme 1 öncekine gidiyor
value = todo.nextElementSibling;//bir sonraki kardeşine gitme
value = todo.nextElementSibling.nextElementSibling;//2 atlayarak son kardeşine gitmiş oluyor
value = todo.previousElementSibling.previousElementSibling;//2 öncesine gitmek için yaparsak null değeri verir
console.log(value);*/












