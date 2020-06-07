
// const kayit={
//     ad : "ela",
//     soyad : "akbaş",
//     yas : 15,
// };

// const person = new Map();
// person.set("ad","ela");
// person.set("soyad","akbaş");
// person.set("yas","15");

// const arrow = () => console.log(person.entries().next().value);
// arrow();
// //DÜZELTİLİCEK

var kayit=[
    {
        ad:"aslı",       
        soyad:"boz",
        yas:17
    },
    {
        ad:"ela",
        soyad:"akbaş",
        yas:14
    },
    {
        ad:"sıla",
        soyad:"kılıç",
        yas:16
    },
]
arrow = () => { 
   const son = kayit.map(function(Ad){return Ad.ad;});
    console.log(son);
}
arrow();