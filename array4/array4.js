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
//             indexNumero = -1
//         }

//     }
//     indexNumero = 0
//     array[i] = numero
// }
// console.log("Numeros: " + array)


// Exercicio 3

// var arrayA = []
// var arrayB = []
// var arrayC = []
// var indexArray = 0

// var repeat = true
// while (repeat) {
//     arrayA[indexArray] = parseInt(prompt("Vetor A:"))
//     arrayB[indexArray] = parseInt(prompt("Vetor B:"))
//     var continuar = prompt("Deseja Adicionar mais Numeros? s/n")

//     if (continuar == "n" || continuar == "N") {
//         repeat = false
//     }
//     indexArray++
// }



// var indexArray = 1
// var indexC = 0
// for (i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] % 2 != 0 && arrayB[i] % 2 != 0) {
//         arrayC[i] = arrayA[i]
//         arrayC[indexC + 1] = arrayB[i]
//         indexC++
//     } else {
//         for (var index2 = 0; index2 < indexArray; index2++) {

//             if (arrayA[i] == arrayB[index2]) {
//                 arrayC[indexC] = arrayA[i]
//                 indexC++

//             } else if (arrayA[i] % 2 != 0) {
//                 arrayC[indexC] = arrayA[i]
//                 indexC++

//             } else if (arrayB[index2] % 2 != 0) {
//                 arrayC[indexC] = arrayB[index2]
//                 indexC++
//             }

//         }
//     }
// }

// console.log(arrayA)
// console.log(arrayB)
// console.log(arrayC)

// Exercicio 4

var arrayA = []
var arrayB = []

for (var i = 0; i < 10; i++) {
    arrayA[i] = parseInt(prompt("Digite o " + (i + 1) + " Numero"))
}

var indexArrayB = 0

for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i] == 0) {
        arrayB[indexArrayB] = arrayA[i + 1]
        indexArrayB++
        i++
    } else {
        arrayB[indexArrayB] = arrayA[i]
        indexArrayB++
    }

}
console.log("Entrada = " + arrayA)
console.log("Saida = " + arrayB)
