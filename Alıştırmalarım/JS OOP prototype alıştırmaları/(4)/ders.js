//call
 function show() {
     console.log('Show function');
  }
  show();
 show.call(); //  call Yöntemi show u bu şeklde çağırmak aynıdır

 function show() {
    console.log(this);//this'i global nesne yerine tanımlamış oldu
 }
 show(); 
//örnek olarak
 function add(a,b) { 
    return a + b;// add() işlevi doğrudan call çağırmak yerine, add işlevi çağırmak için yöntemi kullanır
 }
 let result = add.call(this, 10, 20);
 console.log(result);
//
//örnek 2
 let greeting = 'Hi';
 let messenger = {
     greeting: "Hello" 
}

 function say(name) {
    console.log(greeting + ' ' + name);// çağrıldığında call ile birlikte çalışır
 }
 say.call(this,'John');//çağrıldığı kısım
 say.call(messenger,'John');//bu şekilde kullanıldığında ise call() nesneyi değer olarak iletir
//
//constructar zincirleme
function Box(height, width) {//ilk nesneye 2 özellik ekledik
    this.height = height;
    this.width  = width;
}

function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}

let widget = new Widget('red',100,200);

//call() ile ödünç alma
 const car = {//1.obje
     name: 'car',
     start: function() { 
         console.log('Start the ' + this.name);
     },
     speedup: function() {
         console.log('Speed up the ' + this.name)
     },
     stop: function() {
         console.log('Stop the ' + this.name);
     }
 };
 const aircraft = {//2.obje
     name: 'aircraft',
     fly: function(){
         console.log('Fly');
     }
 };
 car.stop.call(aircraft);//obje içinde oluşturduğumuz metodları 2.obje ile birleştirmiş olduk
//Bir nesne başka bir nesnenin yöntemini kullandığında, borç alma işlevi denir.

//
 function getOddNumbers() {
     const args = Array.prototype.slice.call(arguments);//slice() : kendisine parametre olarak verilecek olan dizi aralığında bulunan değerleri kopyalayarak yeni bir dizi oluşturur. Oluşturduğu diziyi geri döndürür. 
     return args.filter(num => num % 2);
 }

 let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
 console.log(oddNumbers);
 const args = Array.prototype.slice.call(arguments);


//apply


//bind