# language: pt

Funcionalidade: Alterar a Imagem do Notebook

Cenário: 
    Dado que enviei a requisição de Update para a API
    Quando receber o retorno 200
    Então eu valido que o produto foi atualizado corretamente
    E eu verifico o novo id da nova imagem inserida