let num1 = parseInt(prompt("Digite um número: "))
let num2 = parseInt(prompt("Digite um número: "))
let num3 = parseInt(prompt("Digite um número: "))
let num4 = parseInt(prompt("Digite um número: "))
let num5 = parseInt(prompt("Digite um número: "))
let valores = [num1, num2, num3, num4, num5]

let maior = valores[0]

for (let vetor in valores) {
    if (valores[vetor] > maior) maior = valores[vetor]
}

document.write("Valores digitados foi: " + valores)
document.write("<br>O maior valor foi: " + maior)
