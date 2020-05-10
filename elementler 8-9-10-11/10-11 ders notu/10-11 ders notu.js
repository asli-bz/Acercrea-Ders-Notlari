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

console.log(newlink);//elementimiz oluştu bunu en son ekranda göstermek için kullandık*/
//----dinamik-----element----silme------
