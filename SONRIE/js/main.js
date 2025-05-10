'use strict';

const estado = document.querySelector(".js-estado");
const button = document.querySelector(".js-button");
const imagen = document.querySelector(".js-img");
const body = document.querySelector('body'); // Para cambiar el fondo

const handleClick = (event) => {

if(estado.value === "sonriente") {
imagen.src = './images/sonrisa-sin-fondo.png'; imagen.alt = 'sonriente';
} else if (estado.value === "triste") {
imagen.src = './images/triste-sin-fondo.png';
imagen.alt = 'triste';

}

 // Generar número aleatorio entre 0 y 100
 const numeroAleatorio = Math.floor(Math.random() * 101); // incluye 0 y 100

 // Cambiar el color de fondo según si es par o impar
 if (numeroAleatorio % 2 === 0) {
  body.classList.remove('fondo-naranja');// amarillo correcto
  body.classList.add('fondo-amarillo'); // Añadir clase amarillo
 } else {
  body.classList.remove('fondo-amarillo'); // Eliminar clase anterior
  body.classList.add('fondo-naranja'); // Añadir clase naranja
 }

 console.log('Número aleatorio generado:', numeroAleatorio); // para pruebas
};

button.addEventListener('click', handleClick);
button.addEventListener("click", handleClick);