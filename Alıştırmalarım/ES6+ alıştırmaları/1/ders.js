/*örnek1)*/

const sor = (soru, evet, hayir) => {
    if (confirm(soru)) evet();
    else hayir();
  }
  console.log(sor("iyimisn","evet","hayır"));

/* örnek2 ) */
let topla=function(a,b){return a+b;}

const topla = (a,b) => a + b;
console.log(topla(7,6));


/*ornek3)*/

const konus = (name,text) => {
  var konusan="konusan";
  return konusan +' ' + name +':'+ text;
}
console.log(konus("ahmet","dersin düzenini bozdu"));

