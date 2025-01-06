# language: pt
Funcionalidade: Procurar Produto

    Como um usuário
    Quero pesquisar um produto no site
    Para que eu possa encontrar o que desejo comprar

    Cenário: Realizar uma busca de um produto
        Dado que eu acesso à página inicial do site
        Quando eu digito 'Laptop' no campo de busca
        Então devo ver produtos relacionados a 'Laptop' na listagem

