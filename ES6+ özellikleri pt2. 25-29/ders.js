/*ES6+ MAPS VERİ TİPİ : her key(anahtar) -value(değer) mapler de bu key bir veritpi oluyor
obje oluştururken bu objemiz int yada string olmaıyor burada KEY kendi içerisinde int string obje olabiliyor

//MAP OLUŞTURMA
let mymap = new Map();
console.log(mymap);//buradaki mapimiz tipi obje gözüküyor
//keylerimizi oluşturduk
const key1 = "mustafa";
const key2 = {a:10,b:20};
const key3 =() =>2;//arrow func şeklinde yazılmış sadece bize 2 değerini gönderir
//MAP kısmına eklemek için set komutu kullanıyoruz
mymap.set(key1,"string");
mymap.set(key2,"obje");
mymap.set(key3,"function");

//maplerden key e karşılık gelen değeri almak için : GET
console.log(mymap.get(key1));//key1 karşıllık gelen
console.log(mymap.get(key2));//key2 için
console.log(mymap.get(key3));//key3 için

console.log(mymap);//şekşinde de keylere karşılık gelenleri görebiliriz

//içersinde kaç eleman var görmek için , Map boyutu
console.log(mymap.size);

//yeni bir MAP oluşturmak için
const cities = new Map();
cities.set("ankara",5);
cities.set("istanbul",25);
cities.set("izmir",32);

//forEach ile map üzerinde gezinme
cities.forEach(function(value,key){
    console.log(key,value);
});//gezinmiş olduk

//for Of ile gezinme
const cities = new Map();
cities.set("ankara",5);
cities.set("istanbul",25);
cities.set("izmir",32);

for( let value of cities){
console.log(value);
}//her value bir arraye denk gelmiş oluyor bunları ayrı ayrı almak için
//(let [key,value] of cities) şeklinde yapılabilirz burada distructing var

//cities in sadece anahtarlarını almak için : map keys
const cities = new Map();
cities.set("ankara",5);
cities.set("istanbul",25);
cities.set("izmir",32);

for(let key of cities.keys()){//arraya benzer obje dönğcek ve bunun üzerinde sadece keylerde dolanabiliriz
    console.log(key);
}
//sadece valueları almak istersek : map values
for(let value of cities.values()){
      console.log(value);
}

//mapler ve array ler arasında güçlü bir bağ var mesela ; bir arrayden map oluşturma
// => ARRAYden MAP oluşturma
const array =[["key1","value1"],["key2","value2"]];//array içinde array oluşturduk
//bu arrayden map oluştururken key1 burada anahtar değerimiz olucak ona kar
const lastmap = new Map(array);
console.log(lastmap);//arraylerden map oluşturma yapmış olduk


// =>MAPden ARRAY oluşturma
const cities = new Map();
cities.set("ankara",5);
cities.set("istanbul",25);
cities.set("izmir",32);

const array = Array.from(cities);//citiestekileri arraya göndermiş olduk
console.log(array);//array oluştu 
//["ankara",5],["istanbul",25],["izmir",32];arraye attığımızda bu şekilde göstermiş olduk aslında
 

//mapleri projelere göre istediğimiz yerde kullanabiliriz

*/