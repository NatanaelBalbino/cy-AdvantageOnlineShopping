# language: pt

Funcionalidade: Validar retorno da pesquisa

Cenário:
    Dado que eu consultei um produto na API de produtos
    Quando eu recebo o retorno 200 OK da API
    Entao eu valido se o retorno contem somente produtos referentes a minha pesquisa