function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films=this.getFilmsFromStorage();//arraya sahip olmuş olduk
   
    films.push(newFilm);
    /*
    [
        {title:"djfudfdvjs",director:"rekfgjhbverj",url:"ehdfjkrenjf"}
    ]
    */
   localStorage.setItem("films",JSON.stringify(films));//direk olarak local kısma yazılmış olucaktır
}
Storage.prototype.getFilmsFromStorage = function(){

    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));//aldığımız string değeri parse ettikten sonra arraya çevirmeliyiz


    }
    return films;
}