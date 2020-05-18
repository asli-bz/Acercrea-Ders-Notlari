//const form = document.getElementById("container");
//1.ekran için
const ad = document.getElementById("ad");
const soyad= document.getElementById("soyad");
const yas = document.getElementById("age");
const dogum = document.getElementById("dogum");

var city = document.getElementById("city");
var country = document.getElementById("country");

//butonlar için
const devam = document.getElementById("next");
//tıklamalar gerçekleştiğinde
previous.style.display= "none";
son.style.display="none";

devam.addEventListener("click",addItem);
function addItem(){
    sessionStorage.setItem("ad",ad.value);
    sessionStorage.setItem("soyad",soyad.value);
    sessionStorage.setItem("yas",yas.value);
    sessionStorage.setItem("doğum tarihi",dogum.value);

    if(ad.value==="" || soyad.value==="" || yas.value==="" || dogum.value===""){
       
     alert("devam etmek için doldurun");
    }
    else{
        ad.value="";
        yas.value="";
        ad.placeholder = "Country";
        yas.placeholder="City";
        soyad.style.display = "none";
        dogum.style.display = "none";
        
        var previous=document.getElementById("previous");
        previous.style.display="block";

        var son = document.getElementById("son");
        son.style.display="block";

        devam.style.display="none";
        previous.addEventListener("click",previousItem);
        function previousItem(){
            
            soyad.value="";
            dogum.value="";
            ad.value="";
            yas.value="";
            ad.placeholder = "First Name";
            yas.placeholder="Age";
            soyad.placeholder="Last Name";
            dogum.placeholder="Date Year";

            soyad.style.display = "block";
            dogum.style.display = "block";
            previous.style.display= "none";
            devam.style.display="block";
            son.style.display="none";
        }
        son.addEventListener("click",saveItem);
        function saveItem(){
            if(city.value !==""||country.value!==""){
            alert("kaydedilmiştir");
            }
            
        }
    }
  
}
/*let div = document.createElement("div");
        div.className="container py-5";

        let div2=document.createElement("div");
        div2.className="card mb-5";
        div2.style.maxWidth="400px";
        div.appendChild(div2);

        let div3 = document.createElement("div");
        div3.className="col-md-8";
        div2.appendChild(div3);

        let divbody = document.createElement("div");
        divbody.className="card-body";
        div3.appendChild(divbody);

        let p=document.createElement("p");
        p.className="card-text h5 text-center";
        p.textContent="please fill with your details";
        divbody.appendChild(p);
        
        let table = document.createElement("table");
        divbody.appendChild(table);

        let tr= document.createElement("tr");
        table.appendChild(tr);

        let td=document.createElement("td");
         tr.appendChild(td);

         let divrow=document.createElement("div");
         divrow.className="form-row";
         td.appendChild(divrow);

         let input = document.createElement("input");
         input.id="city";
         input.style.width="175px";
         input.type="text";
         input.className="form-control";
         input.appendChild(document.createTextNode("city"));
         divrow.appendChild(input);

         let tr2= document.createElement("tr");
         table.appendChild(tr2);
         let td2=document.createElement("td");
          tr2.appendChild(td2);

          let divro=document.createElement("div");
          divro.className="form-row";
          tdd.appendChild(divro);

          let inp = document.createElement("input");
          inp.id="country";
          inp.style.width="175px";
          inp.type="text";
          inp.className="form-control";
          inp.appendChild(document.createTextNode("country"));
          divro.appendChild(inp);
           
          let buton1 = document.createElement("button");
          buton1.id="previous";
          buton1.className="mt-3 buton";
          buton1.type="submit";
          buton1.textContent="previous";


          let buton2 = document.createElement("button");
          buton2.id="next";
          buton2.className="mt-3 buton";
          buton2.textContent="next";
 */