'use strict';

const listaHTML = document.querySelector(".js_lista-pelis");

const listaMovies = ["Mision imposible 1","Harry Potter","Una pareja de 3"] 


function paint () {
    listaHTML.innerHTML = "";
    listaHTML.innerHTML += `<li>${listaMovies[0]}</li>`;
    listaHTML.innerHTML += `<li>${listaMovies[1]}</li>`;
    listaHTML.innerHTML += `<li>${listaMovies[2]}</li>`;  
    listaHTML.innerHTML += `<li>${listaMovies[3]}</li>`; 
}
paint();
listaMovies[3] = "Star Wars";
paint();
listaMovies[1] = "Mulan";
paint();

 

