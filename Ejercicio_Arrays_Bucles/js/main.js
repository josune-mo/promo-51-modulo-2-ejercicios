function get100Numbers(){
    const numbers = [];
    for (let i=1; i < 100; i++){
        numbers.push(i);
    }
    //console.log(numbers);
    return numbers;
    

    
}
get100Numbers();

const numbers1 = get100Numbers();
//console.log(numbers1);

for (let i=0; i < numbers1.length; i++) {
        //console.log(numbers1[i]);
        
    };

function getReversed100Numbers(){
    const numbers2 = get100Numbers();
    const numerosreversed = numbers2.reverse();
    //console.log(numerosreversed);    
    return numerosreversed;
};

getReversed100Numbers();

const numbers3 = getReversed100Numbers();
//console.log(numbers3);

for (let i=0; i < numbers3.length; i++) {
        // console.log(numbers3[i]);
        
    };


const lostNumbers = [4, 8, 15, 16, 23, 42];
    function bestLostNomber (){
        const pares = [];
        const multiplosde3 = []; 

    for (let i=0; i < lostNumbers.length; i++){
            if (lostNumbers[i] % 2 === 0){
                pares.push(lostNumbers[i]);
                } else if (lostNumbers[i] % 3 === 0){
                    multiplosde3.push(lostNumbers[i])
                };
            };     
           
       return { pares, multiplosde3 };     
 
    };
    
const resultado =  bestLostNomber();
console.log(resultado.pares);
console.log(resultado.multiplosde3);

const Concatenar = lostNumbers.concat(resultado.pares, resultado.multiplosde3);
console.log(Concatenar);

   




