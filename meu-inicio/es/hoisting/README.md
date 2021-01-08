# Hoisting (levantar, suspender algo)

**Vriáveis e funções elevadas ao escopo (bloco, função ou global)**


### Variável
* Só eleva a criação e não atribuição;

* Se não tivesse hoisting, daria erro no exemplo em `hoisting-var.js`, mas com ele a saída é undefined, pois ela existe mas não foi definida.

### Função
* A função é elevada ao topo como um todo.
* Em um projeto real tem que haver uma;configuração para que isso não seja possível (pelo menos é o que disse o professor);
* Declarar função antes de usar.