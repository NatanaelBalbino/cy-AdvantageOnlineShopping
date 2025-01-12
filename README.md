# cy-AdvantageOnlineShopping
## Guia de Execução da Automação

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Pré-requisitos
Certifique-se de que os seguintes softwares estão instalados na sua máquina:
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git Bash](https://git-scm.com/downloads) 

## Clonando o Repositório

1. Abra o **Visual Studio Code**.
2. Vá para **Terminal > New Terminal**.
3. Selecione o terminal **bash**.
4. No prompt, insira o comando abaixo para clonar o repositório:
```sh
git clone https://github.com/NatanaelBalbino/cy-AdvantageOnlineShopping.git
```
5. Navegue até a pasta raiz do projeto:
```sh
cd cy-AdvantageOnlineShopping

```
6. Instale as dependências do projeto:
```sh
npm install
```
Aguarde a conclusão da instalação.

## Executando os Testes

Para abrir a interface gráfica do Cypress e rodar os testes:
```sh
npx cypress open
```

Para executar os testes diretamente no console:
```sh
npx cypress run
```

## Desafio Web

Abaixo as features e seus respectivos cenários conforme solicitado

- search_product.feature | Realize a busca de um produto.
- select_product.feature | Incluir produto no carrinho.
- validate_product.feature | Validar os produtos incluídos no carrinho na tela de pagamento.

Pra o desafio Web utilizei a Arquitetura Page Objects que pode ser avaliada na pasta:
- cypress/support/page

## Desafio API

Abaixo a feature e o cenário conforme solicitado

- ValidateProductsAPI | Procure por um produto (GET).
- ValidateUpdateImageAPI | Atualize a imagem de um produto (POST).

✨A URL do ambiente já está definida no projeto, portanto, não é necessário realizar qualquer alteração.✨
