//1)
function Araba(renk,model,hiz){
    this.renk=renk;
    this.model = model;
    this.hiz= hiz;
}

Araba.prototype.hızlan = function(){
console.log("Hız arttırıldı :", this.hiz += 100);
}
Araba.prototype.yavasla = function(){
console.log("Hız azaltıldı :", this.hiz-= 200);
}

const nesne = new Araba("mavi","mercedes",1213);
console.log(nesne);
nesne.hızlan();
nesne.yavasla();

const nesne2 = new Araba("kırmızı","BMW",2349);
console.log(nesne2);
nesne2.hızlan();
nesne2.yavasla();

//2)
 const kamyon= Object.create(Araba);
kamyon.renk="mavi";
kamyon.model="mercedes";

console.log(kamyon);