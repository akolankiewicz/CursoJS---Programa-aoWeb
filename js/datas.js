let data = new Date();
console.log(data); // ano - mes - dia T hora min s
let ano = data.getFullYear(); // pega o ano atual inteiro ex:2024
let mes = data.getMonth(); // traz o n-1 do mes -> jan = 0 e dez = 11
let dia = data.getDate(); //pega o dia atual
let diaSemana = data.getDay(); // de 0 a 6 (domingo - sabado)
let hora = data.getHours(); // apenas a hora, ex: 15:17 -> 15
let minutos = data.getMinutes(); // de 0 a 59
let segundos = data.getSeconds(); // 
let milissegundos = data.getMilliseconds(); // 
// data padrao brasileiro dia/mes/ano
let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR) // data e hora