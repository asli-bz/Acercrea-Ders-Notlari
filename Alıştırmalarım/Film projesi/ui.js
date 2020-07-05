//ui
function UI(){

}
UI.prototype.addFilmToUI=function(newFilm){
    const filmlist = document.getElementById("films");
    filmlist.innerHTML+= `

    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
    `;
}
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value = "";

}
UI.prototype.displayMessages = function(message,type){
    const cardbody=document.querySelector(".card-body");
    //aleert divini oluşturma
    const div = document.createElement("div");
    div.className=`alert alert-${type}`;
div.textContent=message;

cardbody.appendChild(div);

setTimeout(function(){
div.remove();
},1000);

}