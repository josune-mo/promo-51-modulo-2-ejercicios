let adalaber = {
    nombre: 'Josune',
    edad: 34,
    profesion: 'periodista',
    run: function () {
        console.log('Estoy corriendo');
    },
    runAMarathon: function (distance) {
        console.log('Estoy corriendo un maraton de ' + distance + 'km');
    },
    showBio: function () {
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
        
    },
}


adalaber.run(); 
adalaber.runAMarathon(50);
adalaber.showBio();

console.log(`Mi nombre es ${adalaber.nombre}, tengo ${adalaber.edad} años y soy ${adalaber.profesion}.`); // siempre debe de ir fuera a no ser que dentro del objeto haya una funcion que lo imprima. 

let adalaber2 = {
    nombre: 'Sandra',
    edad: 33,
    profesion: 'periodista',
    showBio: function () {
        console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
        
    },


}
console.log(`Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.edad} años y soy ${adalaber2.profesion}.`);
adalaber2.showBio(); // la diferencia entre hacerlo con this.nombre etc es que si lo haces con this, puedes reutilizar la funcion en otros objetos. y no tienes que modificar nada.

let cestaPeras = {
    maximo: 10,
    minimo: 5,
    actual: 0,
    inicial: 1,
    suma: function () {
        cestaPeras.actual++;
    
        

        /* let suma = actual + peras; */
        /* if (this.actual + peras <= this.maximo) {
            this.actual += peras;
            console.log(`Se han añadido ${peras} peras. Ahora hay ${this.actual} peras.`);
        } else {
            console.log(`No se pueden añadir ${peras} peras. La cesta está llena.`);
        }
        return this.actual; */

    },
    resta: function () {
        cestaPeras.actual--;
    },

    restart: function () {
        cestaPeras.actual = cestaPeras.inicial;
    },

 
}
cestaPeras.suma();
cestaPeras.resta();
cestaPeras.restart();
console.log(cestaPeras.actual); 

const job = 'developer';
let infoUsario = {
    firstName: "Laura",
    lastName: "Fernández",
    age: "25",
    job:`${job}`,
    
}
console.log(infoUsario);



