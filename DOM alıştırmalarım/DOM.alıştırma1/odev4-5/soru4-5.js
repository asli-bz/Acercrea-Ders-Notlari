/*let degisken = document.getElementById("kelime").textContent;//elementin textini almak için textcontent
let dizi = new Array();//array oluşturmamızın sebebi paragrfın kaç elemanlı olduğunu anlamak için 
dizi = degisken.split(" ");//kelimeleri boşluklarına göre split ile ayırarak array içine attık

console.log(dizi.length);//ekranda gösterdik
*/
function uygula() {
    const paragraf = document.getElementById("paragraf");
    const metin = paragraf.textContent;//string
    const kelimeler=metin.split(" ");//dizi
    //console.log(kelimeler.length);ödev5in cevabı
    let yeniyazi="";
    for (let index = 0; index < kelimeler.length; index++) {
        
        if (kelimeler[index].length == 5)
        {
            var kelime=kelimeler[index];
           if( kelime[kelime.length-1]!="." && kelime[kelime.length-1]!=",")
            yeniyazi+="<span style='color:red'>"+ kelimeler[index] + " </span>";
           else
           yeniyazi+=kelimeler[index] + " ";
        }
        else{

            yeniyazi+=kelimeler[index] + " ";

        }
        
    }

    //document.body.innerHTML(yeniyazi);
    paragraf.innerHTML=yeniyazi;
    //console.log(kelimeler.length);//odev5 in cevabı
}