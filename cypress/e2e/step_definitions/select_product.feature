# language: pt
Funcionalidade: Adicionar Produto no Carrinho

    Como um usuário
    Quero adicionar um produto no carrinho
    Para validar se o produto aparece devidamente no carrinho

    Cenário: Adicionar Produto no Carrinho
        Dado que eu pesquisei um produto
        Quando eu seleciono um produto da lista
        E clico no botão 'ADICIONAR AO CARRINHO'
        # Entao devo ver o produto no carrinho