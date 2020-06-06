
const kayit={
    ad : "ela",
    soyad : "akbaş",
    yas : 15,
};

const person = new Map();
person.set("ad","ela");
person.set("soyad","akbaş");
person.set("yas","15");

const arrow = () => console.log(person.entries().next().value);
arrow();
//DÜZELTİLİCEK
