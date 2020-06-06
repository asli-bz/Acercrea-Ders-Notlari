let isimler = ["Ahmet", "Ali", "Ahmet", "Ayşe",
  "Ali", "Ahmet", "Veli", "Ayşe"];
let sorgu = new Set();
for (const key in isimler){
    sorgu.add(isimler[key]);
}
console.log(sorgu);
//2.yol
let sorgu = new Set(["Ahmet", "Ali", "Ahmet", "Ayşe",
"Ali", "Ahmet", "Veli", "Ayşe"]);
