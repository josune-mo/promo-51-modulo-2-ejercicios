const elementoParrafo = document.querySelector (".js_parrafo");
elementoParrafo.innerHTML = "Hola Mundo";
console.log(elementoParrafo);
const elementoTittle = document.querySelector(".js_tittle");
let elementoNombre = document.querySelector(".js_nombre");
console.log(elementoNombre);

elementoTittle.innerHTML += elementoNombre.innerText;