let yazi=document.getElementById("yazi");  
let metin= document.getElementById("metin");    
  
console.log(metin);
metin.addEventListener("keyup",Karakter); 
    function Karakter() {          
        var sonsayi = 50 - document.getElementById("metin").value.length;         
        if (sonsayi >= 0){             
            document.getElementById("deger").innerHTML = sonsayi;         
        }         
        else         
        {             
            let metin = document.getElementById("metin")
            metin.value = document.getElementById("mesaj").value.substring(0,50); 
            document.getElementById("deger").innerHTML = 0;         
        } 
    }
