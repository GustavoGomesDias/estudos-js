# Currying

**Transforma uma função com n parâmetros em uma função que recebe apenas um parâmetro.**

No exemplo, temos a transformação de uma função soma e que tem parâmetro um número a e b.
```js
function soma(a, b){
    return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

```
Enfim, o intuito é passar de forma que não precise passar o 2 toda hora, sendo que no currying haverá uma nova função que recebe o segundo parâmetro.

[Como fica a função do exemplo](https://github.com/GustavoGomesDias/estudos-js/blob/master/es/currying/currying.js)
