let salario = parseFloat(prompt("Digite o seu salário"))
let salarioBonus = adicionarBonus()
let salarioDescontado = colocarImposto()

function adicionarBonus() {
    return salario + (salario * 5 / 100)
}

function colocarImposto() {
    return salarioBonus - (salarioBonus * 7 / 100)
}

document.write("Seu salário é R$" + salarioBonus)
document.write("<br>Seu salário com imposto é R$" + salarioDescontado)