let totalAmount = parseFloat(prompt("Digite o valor total a ser parcelado:"));
let installments = parseInt(prompt("Digite a quantidade de parcelas:"));
let installmentValue = totalAmount / installments;

for (let i = 1; i <= installments; i++) {
    alert(`Parcela ${i}: R$ ${installmentValue.toFixed(2)}`);
}