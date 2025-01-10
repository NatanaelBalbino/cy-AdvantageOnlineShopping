# language: pt
Funcionalidade: Procurar Produto

    Como um usuário
    Quero pesquisar um produto no site
    Para que eu possa encontrar o que desejo comprar

    Esquema do Cenário: Realizar uma busca de um produto
        Dado que eu acesso à página inicial do site
        E eu pesquise um '<produto>' no Campo de Busca
        Quando estiver na tela de resultados
        Então devo ver produtos relacionados a '<produto>' na listagem

    Exemplos:
    | produto |
    | Laptop | 