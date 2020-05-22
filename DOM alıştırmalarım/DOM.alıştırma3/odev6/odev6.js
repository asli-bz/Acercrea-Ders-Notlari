document.getElementById("deger").textContent+=localStorage.getItem("adet");
  function arttirma(){
    var deger = parseInt(document.getElementById("deger").textContent);
    localStorage.setItem("adet",document.getElementById("deger").textContent = deger + 1);
  }