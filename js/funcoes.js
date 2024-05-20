//bloco de codigo destinado a executar uma função especifica
// funciona como um miniprograma dentro do codigo
// executam quando sao chamadas
function soma(valor1, valor2){
    return valor1+valor2;
}
document.getElementById('texto').innerHTML = soma(10,10);

function realParaDollar(real, cotacaoDolar){
    return real*cotacaoDolar
}
document.getElementById('texto1').innerHTML = realParaDollar(50, 4.95)

function hello(){
    alert("Hello, World!");
}