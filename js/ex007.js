let totalVendas = parseFloat(prompt("Informe o valor total de vendas: "))

let lucro = calcularLucro()

function calcularLucro() {
    return "R$" + totalVendas * 23 / 100
}

document.write("A empresa teve um lucro de " + lucro)