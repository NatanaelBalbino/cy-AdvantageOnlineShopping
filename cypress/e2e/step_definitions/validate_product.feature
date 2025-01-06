# language: pt

Funcionalidade: Validar produtos que estão no Carrinho

    Como um usuário
    Desejo avaliar os produtos que coloquei no carrinho
    Para validar se o produto vai aparecer devidamente na tela de Pagamento

    Cenário: Validar produtos do carrinho versus produtos na tela de pagamento

    Dado que selecionei produtos 
    E os coloquei no carrinho
    Quando acessar a tela de Pagamento
    Então o produtos que estão no carrinho devem aparecer na tela de Pagamentos