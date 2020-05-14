    var ad = document.querySelector("#ad"); 
    var soyad = document.querySelector("#soyad"); 
    var mail = document.querySelector("#email"); 
    var form = document.querySelector("#form");        
    var buton = document.querySelector("#buton");
    buton.onclick=function(){    
         var element;     
         let yeni;  
         if (ad.value == "" ){        
               yeni = form.children[0];         
               element=document.createElement("span"); 
               element.id = "hata";        
               element.className="text-danger";        
               element.appendChild(document.createTextNode("alan boş bırakılamaz"));         
               yeni.appendChild(element);
         }    
           if(soyad.value== ""){
           yeni = form.children[1];         
            element=document.createElement("span"); 
            element.id = "hatalı";
            element.className="text-danger";        
            element.appendChild(document.createTextNode("alan boş bırakılamaz"));         
            yeni.appendChild(element);
           }
           if(mail.value == ""){
            yeni = form.children[2];         
            element=document.createElement("span"); 
            element.id = "hatalıydı";        
            element.className="text-danger";        
            element.appendChild(document.createTextNode("alan boş bırakılamaz"));         
            yeni.appendChild(element);
           }
    }
