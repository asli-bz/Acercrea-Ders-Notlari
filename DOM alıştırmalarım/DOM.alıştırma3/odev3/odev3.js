function KontrolEt()
{
    var mail = document.getElementById("mail").value;//id ile ınputun degerini çektik
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;//regex ile aranıcak kelimeleri yaptık
if(regex.test(mail) == false) //if ile harfler yazılana uymuyorsa yani false ise hata mesajıyla ife girer
    {//for döngüsüyle yapılabilir
      alert("hatalı girdiniz");
      return false;//false değer döndürür
      
    }
    else{
      alert("kaydedilmiştir");
      return true;//true değer döndürcek

    }
}
