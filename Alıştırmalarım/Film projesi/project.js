
//project
const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement= document.querySelector("#director");
const urlElement= document.querySelector("#url");

// UI objesini başlatama
const ui =new UI();
//storage objesi üret
const storage = new Storage();
//Tüm eventleri yükleme
eventListeners();
function eventListeners(){
 form.addEventListener("submit",addFilm);
}
function addFilm(e){
    const title=titleElement.value;
    const director =directorElement.value;
    const url= urlElement.value;

    if( title==""|| director==""|| url=="" ){
  //hata
ui.displayMessages("tüm alanları doldurun","danger");
    }
  else{ 
     const newFilm=new Film(title,director,url);
    ui.addFilmToUI(newFilm);//arayüze film ekleme
    storage.addFilmToStorage(newFilm);//storage a film ekleme
    
    }

    ui.clearInputs();
    e.preventDefault();
}



