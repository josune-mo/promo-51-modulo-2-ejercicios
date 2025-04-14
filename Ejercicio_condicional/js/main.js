const elementoNombre = document.querySelector (".js-nombre");
const elementoBoton = document.querySelector (".js-boton");
const elementoResultado = document.querySelector (".js-resultado");

elementoBoton.addEventListener ("click", (ev) =>{
 console.log("Estás haciendo click en el botón");
 let acceso = elementoNombre.value;
 if (acceso === "María"){
    elementoResultado.innerHTML = "Bienvenida, María";
} 
else if (acceso === "Luisa") {elementoResultado.innerHTML = "Bienvenida, Luisa";  
}
else {(elementoResultado.innerHTML = "Lo siento pero el usuario que has introducido no está registrado");}
}

);



