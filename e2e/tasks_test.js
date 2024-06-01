Feature('tasks');

const tasks = new DataTable(['name'])

tasks.add(['Fazer compras'])
tasks.add(['Estudar Javascript'])
tasks.add(['Ler um livro de Node.js'])


Data(tasks).Scenario('deve poder cadastrar uma nova tarefa', ({ I, tasksPage, current }) => {

    const taskName = current.name

    I.deleteByHelper(taskName)

    tasksPage.create(taskName)
    tasksPage.haveTask(taskName)

    //I.wait(5)

})
Scenario('não deve cadastrar tarefas com nome duplicado', ({ I,tasksPage }) => {

    // Dado que eu tenha uma nova tarefa
    const task = {
        "name": "Pagar a fatura do cartão",
        "is_done": false
    }

    I.deleteByHelper(task.name)

    // Mas essa tarefa já foi cadastrada anteriormente e eu não lembrava
    I.postTask(task)

    // Quando tento cadastrar essa tarefa novamente
    tasksPage.create(task.name)

    // Então devo ver uma mensagem de duplicidade
    tasksPage.popUpHaveText('Task already exist!')
    I.wait(5)
}).tag('critical')

