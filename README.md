# 🌎 DESAFIO - PROGRAMATHOR - ESCRIBO
O objetivo desse desafio era implementar uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

## :rocket:  Ferramentas utilizadas
- Javascript
- Node

## Como rodar o projeto
Caso não tenha o Node, instale-o pelo diretamente pelo site https://nodejs.org/en/download<br>
Depois de instalado, utilize o comando 
`node desafio1.js`<br>
Caso queira saber diferentes valores para o somatório, basta ir até:
```
const sumObj = new DivisibleSum(10);
console.log(sumObj.calculateSum());
```
E substituir o valor em `DivisibleSum()` para o valor desejado e obterá o resultado esperado. 
<br><br>
No ambiente de testes, em: 
```
function testDivisibleSum() {

const obj1 = new DivisibleSum(10);
    assert.strictEqual(obj1.calculateSum(), 23);

}
```
Significa que a somatória dos números inteiros e positivos divisíveis por 3 ou por 5 abaixo de 10, será igual a 23.<br>
Altere nos objetos o valor desejado e qual o resultado esperado para aplicar os devidos testes.
