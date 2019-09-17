console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1+nb2;
}

var result1 = additionner(nombre1, nombre2);
console.log('result1 = ', result1);

var somme = additionner;
var result2 = somme(nombre1, nombre2);
console.log('result2 = ', result2);

var multiplication = function(nb1, nb2) {
    return nb1 * nb2;
}

var result3 = multiplication(nombre1, nombre2);
console.log('result3 = ', result3);

var afficherOperation = function(nomOperation, operation, nb1, nb2) {
    console.log(`${nomOperation}(${nb1},${nb2}) = ${operation(nb1, nb2)}`);
}
afficherOperation('Somme', somme, 20, 40);

afficherOperation('Multiplication', multiplication, 10, 20);

afficherOperation('Soustraction', (nb1, nb2) => nb1 - nb2, 15, 5);

