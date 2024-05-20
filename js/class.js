class carro {    /////// funciona como um modelo pra criação de demais classes parecidas
    constructor(v1, v2, v3){
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }
}

const uno = new carro('Fiat', "uno", 2000)
console.log(uno)