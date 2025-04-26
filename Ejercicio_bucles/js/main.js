'use strict';

for (let i = 1; i < 11; i++) {
    console.log("Voy por la vuelta " + i);
}

let acc = 0;

for (let i = 0; i < 10; i++) {
    acc += 2;
    console.log(`El resultado es: ${acc}`);
}

const numbers = [10, 20, 30, 40, 50];
function sumaNumbers(numbers) {
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    console.log(`Resultado: ${suma}`);
    return suma;
}
sumaNumbers(numbers);




