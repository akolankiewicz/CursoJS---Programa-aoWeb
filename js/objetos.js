         /// variavel:  'valor dela', ;
const carro = {marca: "ford", 
modelo: "ka", 
ano:2015, 
placa:"ABC-1234",
buzina: function() { console.log('biiiiiiii') },
completo: function() { 
    console.log ("A marca é "+ this.marca + " e o modelo é "+ this.modelo )   }
};
console.log(carro)
console.log(carro.placa) /// pegar algo especifico, tbm pode ser carro['marca']

carro.buzina() // executa funcao
carro.completo()