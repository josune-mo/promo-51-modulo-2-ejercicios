
// ejercicio con funciones
function multiplicar() {
    let num1 = 4;
    let num2 = 3;

    let multiplicar = num1 * num2;
   
    console.log(multiplicar); 
}

multiplicar();

// ejercicio con parametros 
function media(num1, num2, num3, num4) {
    let suma = num1 + num2 + num3 + num4;
    let media = suma / 4;
    console.log(media);
 
}

media( 4, 4, 6, 7);


// ejercicio true o false

function esPar(numero) {
    
    if (numero % 2 == 0) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
    
}
esPar(9);


// ejercicio ticket con iva
function preciosiniva(precio){

    let iva = 0.21;
    let precioiva = precio * iva;
    let total = precio + precioiva;

    console.log("Precio sin iva: " + precio + " IVA " + iva + " y Total " + total);
}
preciosiniva(12);

// modificamos una variable de ámbito global / 
// devuelve y en vez de x porque el secretletter esta fuera de la funcion y no se modifica su valor. 

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"
