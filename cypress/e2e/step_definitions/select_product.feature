# language: pt
Funcionalidade: Adicionar Produto no Carrinho

    Como um usuário
    Quero adicionar um produto no carrinho
    Para validar se o produto aparece devidamente no carrinho

    Esquema do Cenário: Adicionar Produto no Carrinho
        Dado que eu acesso à página inicial do site
        E eu pesquise um '<produto>' no Campo de Busca
        E eu seleciono um produto da lista
        E clico no botão ADICIONAR AO CARRINHO
        Quando acessar o carinho no canto superior direito
        Entao devo ver o produto no carrinho

    Exemplos:
    | produto |
    | Laptop | 