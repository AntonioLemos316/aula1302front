let peso = parseFloat(prompt("Digite seu peso "))
let altura = parseFloat(prompt("Digite sua altura "))
let nome = (prompt("Digite seu nome "))
let idade = (prompt("Digite sua idade "))

let imc = (peso / altura / altura) * 10000

alert("Peso: " + peso)
alert("Altura: " + altura)
alert("Nome: " + nome)
alert("Idade: " + idade)
alert("Seu imc é: " + imc.toFixed(2))

console.log("Peso: " + peso)
console.log("Altura: " + altura)
console.log("Nome: " + nome)
console.log("Idade: " + idade)
console.log("Seu imc é: " + imc.toFixed(2))

document.write("Peso: " + peso)
document.write("<br>Altura: " + altura)
document.write("<br>Nome: " + nome)
document.write("<br>Idade: " + idade)
document.write("<br>Seu imc é: " + imc.toFixed(2))