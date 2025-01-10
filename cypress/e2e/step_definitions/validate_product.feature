# language: pt
Funcionalidade: Validar produtos que estão no Carrinho

    Como um usuário
    Desejo avaliar os produtos que coloquei no carrinho
    Para validar se o produto vai aparecer devidamente na tela de Pagamento

    Esquema do Cenário: Validar produtos do carrinho versus produtos na tela de pagamento
        Dado que eu acesso à página inicial do site
        E eu pesquise um '<produto>' no Campo de Busca
        E eu seleciono um produto da lista
        E clico no botão ADICIONAR AO CARRINHO
        Quando acessar a tela de Pagamento
        Então o produto que está no carrinho deve aparecer na tela de Pagamentos
    
    Exemplos:
    | produto |
    | Laptop | 