/*1.Yöntemde value ile beraber key'i de aldık*/
let maaslar = {
    "Ali": 100,
     "Ayşe":300,
     "Ahmet": 250
   };
   let enbuyuk=0;
   let enbuyukKisi="";//2.Yöntemde bu satır yok.
  let dizi=Object.entries(maaslar);//destructingi for of içinde kullanabilmek için entries ile objenin key ve value'sini dizi değişkeni içine aktardık.
  console.log(dizi);
  for(let [key,value] of dizi)//destructing yöntemini de kullandık.
  {
   if(value>enbuyuk){
      enbuyuk=value;
      enbuyukKisi=key;//2.Yöntemde bu satır yok.
     }
   
  }
  console.log(enbuyukKisi);//2.Yöntemde bu satır yok.
  
  /*2.Yöntem Bu yöntem de yukarıda belirtilen satırlar çıkıyor.
  Enbüyük value'yi bulduktan sonra bu valueye sahip key'i bulduk*/
  const enbuyukMaasKisisi=Object.keys(maaslar).find(key => maaslar[key] === enbuyuk);
  console.log(enbuyukMaasKisisi);
  
  