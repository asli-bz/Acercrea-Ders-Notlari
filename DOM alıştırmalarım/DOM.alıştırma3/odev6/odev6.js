document.getElementById("deger").value=localStorage.getItem("adet");
  function sepet() {
    var deger = Number(document.getElementById("deger").value);
    localStorage.setItem("adet", document.getElementById("deger").value = deger + 1);
  }