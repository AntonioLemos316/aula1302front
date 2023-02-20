let x = parseFloat(prompt("Digite um número: "))
let y = parseFloat(prompt("Digite outro número: "))

let numSomado = somar()
let numSubtraido = subtrair()
let numDividido = dividir()
let numMultiplicado = multiplicar()

function somar() {
    return x + y
}

function subtrair() {
    return x - y
}

function dividir() {
    return x * y
}

function multiplicar() {
    return x / y
}

document.write("A soma é: " + numSomado)
document.write("<br>A sub é: " + numSubtraido)
document.write("<br>A mult é: " + numMultiplicado)
document.write("<br>A divi é: " + numDividido)