
# Projeto de estudo de automação de testes Codecept eXpress


## 🔖 Gerencie suas tarefas com o Mark L

- [X] Automatizar testes de regressão com CodeceptJS
- [X] Boas práticas para implementação de testes automatizados
- [X] Criação de Page Objects (npx codeceptjs gpo)
- [X] Executar os testes por meio de tags
- npx codeceptjs run --grep 'tag' ou @tag no nome do teste
- [X] Criação de passos genéricos
- [X] Limpeza de base
- [X] Criação de massa via Json
- [X] Criação de relatórios Html(Mochawesome) npx codeceptjs run --reporter mochawesome
- [X] Utilização da biblioteca faker


const{faker} = require('@faker-js/faker')

Feature('tasks');

Scenario('deve poder cadastrar uma nova tarefa', ({ I }) => {

const taskName =  faker.company.name()
    I.amOnPage('/')
    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')
    I.see(taskName, '.task-item')

    I.wait(10)

});

* Rodar api:
PS C:\Codeceptjs\apps\markL\api> npm rum db:init

* Rodar web:
PS C:\Codeceptjs\apps\markL\web> npm run dev

- [X] + Seção 6: Testes contínuos em CodeceptJS no Github Actions
Colocando os testes para rodar na nuvem, no github actions

- [X] Executando os testes no PC
- [X] Executando os testes no Github Actions
- [X] Simulando um bug no scenario de senha incorreta

## 🚀 Tecnologias

- [Visual Studio Code]
- [Playwright] 
- [Node 18.12.1]
- [Npm 8.15.0]
- [Bibliotecas: Faker]

- https://codecept.io/


Feito com 💜 &nbsp;por Jéssica Espíndola da Silva 👋
