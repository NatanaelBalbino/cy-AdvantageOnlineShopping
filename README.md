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
git clone https://github.com/multisoftware-dev/CY-MultiCTe.git
```
5. Navegue até a pasta raiz do projeto:
```sh
cd CY-MultiCTe
```
6. Instale as dependências do projeto:
```sh
npm install
```
Aguarde a conclusão da instalação.

## Configurando as Credenciais

Para executar os testes locais (Cypress), você precisará configurar suas credenciais.

1. **Criar o arquivo de configuração:** Se o arquivo `cypress.env.json` não existir, crie-o na raiz do projeto:
```sh
cypress.env.json
```

A estrutura do projeto deve parecer assim:
```sh
> .github
> cypress
> node_modules
.gitignore
cypress.env.json <==
cypress.config.js
...
```
2. **Adicionar suas credenciais:** Insira o seguinte conteúdo no arquivo `cypress.env.json`, substituindo os valores pelos seus dados:
```sh
{
    "username": "seu-email@multisoftware.com.br",
    "password": "sua-senha"
}
```
> Nota: O Git irá ignorar esse arquivo ao fazer commits, garantindo que suas credenciais fiquem seguras localmente.

## Executando os Testes

Para abrir a interface gráfica do Cypress e rodar os testes:
```sh
npx cypress open
```

Para executar os testes diretamente no console:
```sh
npx cypress run
```

✨A URL do ambiente já está definida no projeto, portanto, não é necessário realizar qualquer alteração.✨