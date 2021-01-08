# Design patterns

### Formato de um pattern
* Nome;
* Exemplo de utilização;
* Contexto em que pode ser aplicado;
* Problema que o pattern resolve;
* Solução (forma que resolve).

### Tipos
* Criação;
* Estrutural;
* Comportamental.

### Criação
**São aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.**

* Abstract Factory;
* Builder;
* Factory Method;
* Prototype
* Singleton.

### Estruturais
**Forma como classes e objetos são compostos para formar estruturas maiores.**

* Adapter;
* Bridge;
* Composite;
* Decoratpr;
* Facade;
* Business Delegate;
* Flyweight;
* Proxy.

### Comportamentais
**Se concentram nos algoritmos e atribuições de responsabilidade entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.**

* Chain of Responsibility;
* Command;
* Interpreter;
* Iterator;
* Mediator;
* Observer;
* State
* Strategy
* Template Method
* Visitor

### Mais utilizados no JS
* Factory => retornam um objeto, sem a necessidade de chamá-lo com o new;

* Singleton => Cria uma instância de uma função construtora e retorná-la toda vez em que for necessária utilizá-la (exemplo popular é o JQuery);

* Decorator => recebe uma outra função e estende o seu comportamento sem modificá-la explicitamente (Pode ser usado com Typescript);

* Observer => a instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado (bem popular em aplicativos JS) e é orgigatório ter: 
    * observers =>  manter uma lista com observers;
    * subscribe => para adicionar subscribe nos observers
    * notify => notifica;

* Module => Permite organizar melhor o código, sem a necessidade de expor variáveis globais.