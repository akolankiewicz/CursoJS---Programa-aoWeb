const lista = [1, 2, 3, 4, 5, 6];
const lista1 = ['arroz', 'feijao', 'macarrao']
console.log(lista[0]) // printa o primeiro termo da lista
console.log(lista1[1]) // chama o segundo termo

//const lista2 = new array('x', 'y', 'z') // forma menos eficaz

console.log(lista.length) // conta qntos termos tem na lista
console.log(lista[lista.length - 1])// -> pega o ultimo termo da lista
console.log(lista.join(" * ")) // adiciona o * entre os termos da lista
//    lista.pop           // remove o ultimo termo da lista
//    lista.push('x')     //adiciona na lista como ultimo termo 
//    lista.unshift       //add na primeira posição e altera todos os índices
//    delete lista[x]     // transforma o valor de x em indefinido, sem alterar os indices
const listaJuntada = lista.concat(lista1) // concatenação, junção das duas listas em uma só
console.log(listaJuntada) // printa a junção das duas listas
const listaJuntadaComidas = listaJuntada.slice(6); // pega os termos a partir do numero que sofre o slice
console.log(listaJuntadaComidas) // inclui o numero de corte //(6, 7) pegaria apenas o termo 6
lista.sort() // coloca em ordem crescente e alfabética
lista.reverse() // pega a ordem contrária