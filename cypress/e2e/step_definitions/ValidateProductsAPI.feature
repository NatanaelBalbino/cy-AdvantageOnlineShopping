# language: pt

Funcionalidade: Validar retorno da pesquisa

    Esquema do Cenário:
        Dado que eu consultei um '<produto>' na API
        Quando eu recebo o retorno 200 OK
        Entao eu valido se o retorno contem somente produtos referentes a meu '<produto>'

        Exemplos:
        | produto |
        | Laptop |
        | Mouse |
        | Tablet |
        | Speaker |