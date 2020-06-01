let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  /*a)Bu objeyi destructing yöntemi ile değişkenlere aktarınız.
  const {a:genis,b:widt,c:heigh} = options;
  console.log(genis,widt,heigh);

  b)Bu objenin içerisinden sadece title’ı değişkene aktarınız.
  */
 const{title:ders}=options;
 console.log(ders);

 /*c)Bu objenin içerisinden aynı anda title’ı bir değişkene, width ve height’i ayrı bir objeye spread ile aktarınız. 
 */
const{} = options;
console.log();











