const elementoBoton = document.querySelector (".js_button");
elementoBoton.addEventListener ("click", (ev) => { 
    elementoBoton.innerHTML = elementoBoton.innerText;
    elementoBoton.classList.toggle("button-click");
})

const elementoText1 = document.querySelector (".js_text-1");
const elementoText2 = document.querySelector (".js_text-2");

elementoText1.addEventListener ("click", (ev) => {
    elementoText1.innerHTML += elementoText2.innerText + " ";})
