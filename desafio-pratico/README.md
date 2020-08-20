### Experiencia de usuário

# Perfomance WEB utilizando JS

Dasafio prático feito durante o bootcamp da **[DIO](https://web.digitalinnovation.one/)**

**(Muito baseado no MercadoLivre)**

## Carregamento
- [x] Minificar arquivos (front-end => html, css, js)

- [x] Habilitar gzip
    Trafegar os arquivos pela rede em forma comprimida.

- [x] Lazy loading
    "carregamento preguiçoso";
    Não carregar tudo direto na Home;
    Carregamento sobre demanda (carrega os arquivos apenas quando acessar a pág.);

- [x] Carregue tudo de forma assíncrona
    Tudo que poder carregado de forma paralela.

- [x] Seletores CSS
    Seletores são o #id, .class, entre outros.

- [x] Recursos que bloqueiam o carregamento de página como iframes, laços de repetição
    Ifrimes - código HTML que permite que m elemento seja exibido dentro de outro (só serve em HTML);
    Carrega os iframes depois que a pág. for carregada;
    `while` e `for` no carregamento icnial da pág pode ser ruim, já que a pág só será carregada depois do fim deles;

- [x] Lide com imagens com carrinho
    Imagem grande == ruim;
    Olhar tamanho e qualidade da imagem com atenção;

- [x] Libere logo o carregamento da página e caregue o resto depois (AFT)
    DevTools => Performance


## Execução - mão na massa
- [x] Main Thread
- [x] SetTimeout
    Setar um tempo pra que execute determinada função;
    Usar para, por exemplo, comandos de repetição;
        Fazer a pagina carregar e só depois rodar o laço
    ```js
    setTimeOut(function (){
        /* código */
    }, 100); /* tempo em milisegundos */
    ```
- [x] RequestAnimationFrame
    Serve como um "agendador de execução";
    Executa como se fosse frame de animação;
    Executa por, pelo menos, 30 quadros por segundo;
    ```js
    requestAnimationFrame(function(){
        /* código */
    });
    ```

- [x] RequestIdleCallback
    "Evolução do outros 2 anteriores";
    Só é executado se a main thread estiver ociosa;
    CUIDADO: Se NÃO tiver ocioso não será executado;
    Não funciona em todos os navegadores ainda;
    ```js
    requestIdleCallback(function(){
        /* código */
    }, 100);
    ```
- [x] Otimizações de CSS via GPU "thread"
    Utilizar propriedades otimizadas por GPU;
    Animando uma h2:
    ```html
    <!-- imagine que já se tem todo o resto -->
    <body>
        <h2 class="title">Título da Página</h2>
    </body>
    ```
    ```css
    /*Indo da direita pra esquerda em 500px e com tempo de transisção == 1s */
    .title{
        position: relative;
        transform: translateX(0); /* Transform é otimizada para uso em GPU */
        opacity: 0;
        transition: all 1s linear; 
    }
    .title.anamete{
        left: translateX(500px);
        opacity: 1;
    }
    ```
    ```js
    // Adiciona uma classe a div title
    document.querySelector('.title').classList.add('animate'); 

    ```

- [x] Tome cuidado ao manipular o DOM (Reflow e Repoint)
    Reflow e Repoint => Browser fica recalculando cada posição dos elementos ao modificar o html;
    