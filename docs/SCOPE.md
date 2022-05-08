# Projeto Trainee 2022.1

## Sobre o projeto

Neste desafio, será criada uma aplicação web a qual corresponderá a um e-commerce.
A natureza dos produtos será de livre escolha das equipes.

## Requisitos Obrigatórios

O projeto deve satisfazer as seguintes necessidades:

- Criar usuários com as seguintes propriedades: ID, email e senha;
    - Os usuários serão dividos em dois grupos: consumidores e administradores:
        - Consumidores deverão efetuar a compra de produtos;
        - Administradores deverão gerenciar os produtos;
- Permitir a entrada de usuários na loja com email e senha;
- Criar produtos com as seguintes propriedades: ID, nome, preço e quantidade em estoque;
- Ler todos os produtos previamente criados;
- Ler os dados de um produto específico;
- Atualizar os dados dos produtos;
- Deletar um produto previamente criado.
- Ao ser realizada a compra de um produto, o estoque deve ser subtraído
- Ao ser adicionada uma nova quantidade ao estoque de um produto, esse deve ser incrementado;
- Exibir uma mensagem de "baixo estoque" para o consumidor, caso o produto tenha um estoque igual ou inferior a 10 unidades.

## Requisitos Extras

O cumprimento destes requisitos será bem visto na avaliação:

- Novas propriedades podem ser adicionadas aos usuários, além das especificadas nos requisitos obrigatórios, como: nome, sobrenome, CEP, endereço de entrega, entre outros;
- Novas propriedades podem ser adicionadas aos produtos, além das especificadas nos requisitos obrigatórios, como: marca, cor, tamanho, entre outros;
- Permitir que administradores emitam cupons de desconto os quais podem ser utilizados pelos consumidores a fim de reduzir o valor da compra;
- Criar carrinho de compras para os usuários consumidores;
    - O carrinho conterá uma lista de produtos acumulados os quais serão comprados pelo consumidor;
    - Uma vez finalizado o carrinho, o usuário deverá concluir a compra;
- Criar lista de desejos para os usuários consumidores;
    - A lista de desejos trata-se de uma lista de produtos os quais são desejados pelo consumidor para uma posterior compra;
    - Deve ser possível adicionar um produto da lista de desejos diretamente ao carrinho, caso tenha sido implementado o carrinho de compras;
- Efetuar o ["deployment"](https://en.wikipedia.org/wiki/Software_deployment) do projeto.

## Stack do Projeto

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://javascript.info)
- [Node.js](https://nodejs.dev/learn)
- [Express](https://expressjs.com)

Os dados serão persistidos num arquivo [JSON](https://en.wikipedia.org/wiki/JSON) o qual representará um [banco de dados](https://pt.wikipedia.org/wiki/Banco_de_dados).
