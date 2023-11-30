// Desafio Técnico 1

// Descrição:

// - Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

// Exemplos:

// - Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.

// - Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

// Instruções:

// - Sua função deve ser implementada em Dart ou em Javascript. - Sua implementação deve estar em um repositório público no Github.

// - Escreva um README no seu repositório com as instruções de como rodar o seu projeto e como podemos testá-lo.

class DivisibleSum {
    constructor(number) {
        this.number = number;
    }

    isDivisible(value) {
        return value % 3 === 0 || value % 5 === 0;
    }

    calculateSum() {
        let sum = 0;

        for (let i = 3; i < this.number; i++) {
            if (this.isDivisible(i)) {
                sum += i;
            }
        }
        return sum;
    }
   
}
const sumObj = new DivisibleSum(10);
console.log(sumObj.calculateSum()); // Saída esperada: 23


// Ambiente de testes
const assert = require('assert');

function testDivisibleSum() {

    const obj1 = new DivisibleSum(10);
    assert.strictEqual(obj1.calculateSum(), 23); // Valor esperado: 23
  
    const obj2 = new DivisibleSum(11);
    assert.strictEqual(obj2.calculateSum(), 33); // Valor esperado: 33
  
    const obj3 = new DivisibleSum(0);
    assert.strictEqual(obj3.calculateSum(), 0); // Valor esperado: 0
  
    const obj4 = new DivisibleSum(1);
    assert.strictEqual(obj4.calculateSum(), 0); // Valor esperado: 0
  
    const obj5 = new DivisibleSum(3);
    assert.strictEqual(obj5.calculateSum(), 0); // Valor esperado: 0
  
    const obj6 = new DivisibleSum(15);
    assert.strictEqual(obj6.calculateSum(), 45); // Valor esperado: 45
  
    console.log('Todos os testes passaram com sucesso!');
  }

  testDivisibleSum();