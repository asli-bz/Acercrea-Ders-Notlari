var kedi1 =  {
    adi:"Tiger", 
    renk:"kahve", 
    yas:0
};

// a)
const kedi2 = Object.create(kedi1);
kedi2.name="kedi 2";
console.log(kedi2);

// b)



// c)
function Kedi(ad,renk){
this.ad = ad;
this.renk = renk;
}

//d)
const kedi3 = new Kedi("beyaz","boncuk");
console.log(kedi3);