/// objeto carro
const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2015
}
// convertendo para um texto json
let texto = JSON.stringify(carro);
// convertendo o texto para objeto
let obj = JSON.parse(texto);
// colocando no html
document.getElementById('area').innerHTML = obj.modelo; // escreve uno
document.getElementById('area1').innerHTML = obj.marca; // escreve fiat
