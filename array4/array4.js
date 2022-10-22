// Lista de exercícios - Array 4

//  Exercicio 1

var array = []
var arraySup = []

for (i = 0; i < 5; i++) {
    array[i] = parseInt(prompt("Digite um numero Positivo ou Negativo"))

    if (array[i] > 0) {
        arraySup[i] = true
    } else {
        arraySup[i] = false
    }
}
console.log(array)
console.log(arraySup)

