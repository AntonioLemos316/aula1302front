let idade1 = (prompt("Digite uma idade"))
let idade2 = (prompt("Digite outra idade"))
let idade3 = (prompt("Digite outra idade"))
let valores = [idade1, idade2, idade3]

let maiorIdade = 0
let menorIdade = 0

for (let pos in valores) {
    if (valores[pos] >= 18) maiorIdade = maiorIdade + 1
    if (valores[pos] < 18) menorIdade = menorIdade + 1
}

document.write("Ao todo temos " + maiorIdade + " maior de idade")
document.write("<br>Ao todo temos " + menorIdade + " menor de idade")