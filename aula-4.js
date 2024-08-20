
function capturarDados() {
    const peso = parseFloat(prompt("Insira seu peso em kg:"));
    const altura = parseFloat(prompt("Insira sua altura em metros:"));
    return { peso, altura };
}

// Função 2: Calcula o IMC com base nos dados fornecidos
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

// Função 3: Classifica o IMC conforme os intervalos definidos
function classificarIMC(imc) {
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }
    return classificacao;
}

// Função Principal: Executa o fluxo do programa
function main() {
    const { peso, altura } = capturarDados();
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}

// Chama a função principal
main();
