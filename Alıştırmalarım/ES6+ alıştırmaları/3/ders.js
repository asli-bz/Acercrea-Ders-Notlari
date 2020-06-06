let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  /*a)Bu objeyi destructing yöntemi ile değişkenlere aktarınız.
   */
  const {title:a,width:b,height:c} = options;
  console.log(a,b,c);
 
/*
  b)Bu objenin içerisinden sadece title’ı değişkene aktarınız.
   */
 const{title:ders}=options;
 console.log(ders);
 
 /*c)Bu objenin içerisinden aynı anda title’ı bir değişkene, width ve height’i ayrı bir objeye spread ile aktarınız. 
 */
const yeni = {title,width,height} = options;
const ornek={...options}
console.log(title);
console.log(ornek);










