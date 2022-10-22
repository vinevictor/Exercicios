// Lista de exercícios - Array 4

//  Exercicio 1

// var array = []
// var arraySup = []

// for (i = 0; i < 5; i++) {
//     array[i] = parseInt(prompt("Digite um numero Positivo ou Negativo"))

//     if (array[i] > 0) {
//         arraySup[i] = true
//     } else {
//         arraySup[i] = false
//     }
// }
// console.log(array)
// console.log(arraySup)


//  Exercicio 2

var array = []


for (i = 0; i < 5; i++) {
    var numero = parseInt(prompt("Digite um numero"))
    for (var indexNumero = 0; indexNumero < 5; indexNumero++) {
        if (numero == array[indexNumero]) {
            numero = parseInt(prompt("Digite outro numero esse ja existe."))
            indexNumero--
        }

    }
    indexNumero = 0
    array[i] = numero
}
console.log("Numeros: " + array)



