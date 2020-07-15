
/* ajax : asenkron olarak veri alıp veri göndermeye yarayan teknoloji
*/
document.getElementById("btn").addEventListener("click",function(){

    //XMLHttpRequest oluşturma

const xhr = new XMLHttpRequest();//obje oluşturduk

//console.log(xhr); //objemizin içinde xmlrequest objesi geldi bize bir veri geldiğinde response text kısımlarından verileri alabiliriz


xhr.onreadystatechange = function(){
    console.log(this.status);//statusleri yazdırmya çalışınca
    //console.log(this.readyState);//readystate yazdırmaya çalışınca
}

xhr.open("GET","example.txt",true);
//bağlantı sağlamak için open fonksiyonu ile açıyoruz
//get post:servera veri göndermek için, put delete request i kullanabiliriz. kendi txt içinden bilgimiizi alıcaz o yzden get kullandık
//2.parametre hangi dosyadan olduğu 
//3.parametre işlemin asenkron mu senkron mu olduğunu söylicez boolen değer girerek true dersek asenkron olucak demiş olduk

xhr.send();//requesti send ile gönderiyoruz


});
