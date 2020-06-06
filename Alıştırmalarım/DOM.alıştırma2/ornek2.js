let ad = document.querySelector("#urunadı");
let marka = document.querySelector("#marka");
let ozellik = document.querySelector("#ozellik");
let fiat = document.querySelector("#fıyat");
var form = document.querySelector(".card-header");

console.log(ad,marka,ozellik,fiat);
/*<table class="table mt-5 py-5" id="table">         
                    <thead>           
                        <tr>             
                            <th scope="col">Ürün adı</th> 

                            <th scope="col">marka</th>    

                            <th scope="col">ozellik</th>  
                                       
                            <th scope="col">Fiyatı</th>           
                        </tr>         
                    </thead>       
                    <tbody>       

                   </tbody>       
                </table>*/
            let sayac  = 0;
function kaydet(){
    sayac = sayac+1;
    if(sayac == 1){
        let table = document.createElement("table");
    table.className="table mt-5 py-5";
    table.id="table";

    let thead=document.createElement("thead");
    table.appendChild(thead);
     let tr = document.createElement("tr");
     thead.appendChild(tr);
    let th = document.createElement("th");
    th.scope="col";
    th.appendChild(document.createTextNode("ürün adı"));
    tr.appendChild(th);
    let te = document.createElement("th");
    te.scope="col";
    te.appendChild(document.createTextNode("marka"));
    tr.appendChild(te);
    let ta= document.createElement("th");
    ta.scope="col";
    ta.appendChild(document.createTextNode("özellik"));
    tr.appendChild(ta);
    let tw = document.createElement("th");
    tw.scope="col";
    tw.appendChild(document.createTextNode("fiyat"));
    tr.appendChild(tw);
    form.appendChild(table);  

    var tbody=document.createElement("tbody");
    table.appendChild(tbody);
    }

    
    tr=document.createElement("tr");
    tbody.appendChild(tr);

    let td = document.createElement("td");
    td.appendChild(document.createTextNode(ad.value));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(marka.value));
    tr.appendChild(td);

     td= document.createElement("td");
    td.appendChild(document.createTextNode(ozellik.value));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(fiat.value));
    tr.appendChild(td);


   }
