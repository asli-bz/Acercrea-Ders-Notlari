let degisken = document.getElementById("kelime").textContent;//elementin textini almak için textcontent
let dizi = new Array();//array oluşturmamızın sebebi paragrfın kaç elemanlı olduğunu anlamak için 
dizi = degisken.split(" ");//kelimeleri boşluklarına göre split ile ayırarak array içine attık

console.log(dizi.length);//ekranda gösterdik