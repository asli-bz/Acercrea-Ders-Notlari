let veri = {
    size: {
      width: 100,
      height: 200
    },
    meyve: ["elma", "armut"],
    varmi: true
  };
  
const{meyve} = veri;//obje içindeki 2.değere ulaşmalı
console.log(...meyve);//spread ile 
