function KontrolEt()
{
    var mail = document.getElementById("mail").value;//id ile ınputun degerini çektik
    var sorgu = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //regex ile aranıcak kelimeleri yaptık
if(sorgu.test(mail) == false) //if ile harfler yazılana uymuyorsa yani false ise hata mesajıyla ife girer
    {//döngü ile de  yapılabilir
      alert("hatalı girdiniz");
      return false;//false değer döndürür
    }
    else{
      alert("kaydedilmiştir");
      return true;//true değer döndürcek

    }
}
