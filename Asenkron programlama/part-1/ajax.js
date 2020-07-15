
/* ajax : asenkron olarak veri alıp veri göndermeye yarayan teknoloji
*/
document.getElementById("btn").addEventListener("click",function(){

    //XMLHttpRequest oluşturma

const xhr = new XMLHttpRequest();//obje oluşturduk

//console.log(xhr); //objemizin içinde xmlrequest objesi geldi bize bir veri geldiğinde response text kısımlarından verileri alabiliriz

/*
xhr.onreadystatechange = function(){
    //console.log(this.status);//statusleri yazdırmya çalışınca
    //console.log(this.readyState);//readystate yazdırmaya çalışınca

    //veri transferi yapıldı : response geliyor bunu kontrol etmek lazım
    if(this.status == 200 && this.readyState == 4)
    {
        //response hazır
        console.log(this.responseText);
    }//çok fazla if else kullanımı olur
     
}bu şekil eski bir yöntem bunun yerine*/
/*xhr.onprogress = function(){//readystate 3 olduğunda yani processing request
console.log("process işleniyor...",this.readyState);
}
xhr.onload = function(){//readystate 4 olduğunda 
   // console.log(this.readyState);//response hazır olduğunda çalışıcaktır onload özelliği ile yapılabilir
if(this.status == 200 ){    //kontrol etmek iççin

console.log(this.responseText);
}
}//herhangi bi hata olmadan gelmesi için kontrol edildi
*/


//iletiyi div içine atmak için
xhr.onload= function(){
    if(this.status===200){
        document.getElementById("ajax").textContent = this.responseText;//içeriği text olarak almış olduk
        //divi id ile seçtik bunun text contentine aldığımız texti yazdırdık
    }
}


xhr.open("GET","example.txt",true);
//bağlantı sağlamak için open fonksiyonu ile açıyoruz
//get post:servera veri göndermek için, put delete request i kullanabiliriz. kendi txt içinden bilgimiizi alıcaz o yzden get kullandık
//2.parametre hangi dosyadan olduğu 
//3.parametre işlemin asenkron mu senkron mu olduğunu söylicez boolen değer girerek true dersek asenkron olucak demiş olduk

xhr.send();//requesti send ile gönderiyoruz


});