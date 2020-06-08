//1)
function Araba(fiyat,tarih){
    this.fiyat=fiyat;
    this.tarih = tarih;

    this.rengi = "kırmızı",
    this.modeli = "BMW",
    this.hızı = 1200;
}
Araba.prototype.hızlan = function(){
console.log("Hız arttırıldı :", this.hızı += 100);
}
Araba.prototype.yavasla = function(){
console.log("Hız azaltıldı :", this.hızı-= 200);
}
const add = new Araba(1020,"20 haziran");
console.log(add);

add.hızlan();
add.yavasla();

//2)
 const kamyon= Object.create(Araba);
kamyon.rengi="mavi";
kamyon.modeli="mercedes";

console.log(kamyon);