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

// var array = []


// for (i = 0; i < 5; i++) {
//     var numero = parseInt(prompt("Digite um numero"))
//     for (var indexNumero = 0; indexNumero < 5; indexNumero++) {
//         if (numero == array[indexNumero]) {
//             numero = parseInt(prompt("Digite outro numero esse ja existe."))
//             indexNumero--
//         }

//     }
//     indexNumero = 0
//     array[i] = numero
// }
// console.log("Numeros: " + array)


// Exercicio 3

var arrayA = []
var arrayB = []
var arrayC = []
var indexArray = 0

var repeat = true
while (repeat) {
    arrayA[indexArray] = parseInt(prompt("Vetor A:"))
    arrayB[indexArray] = parseInt(prompt("Vetor B:"))
    var continuar = prompt("Deseja Adicionar mais Numeros? s/n")

    if (continuar == "n" || continuar == "N") {
        repeat = false
    }
    indexArray++
}


arrayA.length
var indexArray = 1
for (i = 0; i < arrayA.length; i++) {

    if (arrayA[i] % 2 != 0 && arrayB[i] % 2 != 0) {
        arrayC[i] = arrayA[i]
        arrayC[i + indexArray] = arrayB[i]
        indexArray++
    } else if (arrayA[i] == arrayB[i] || arrayA[i] % 2 != 0) {
        arrayC[i] = arrayA[i]

    } else if (arrayB[i] % 2 != 0) {
        arrayC[i] = arrayB[i]
    }
}
console.log(arrayA)
console.log(arrayB)
console.log(arrayC)
