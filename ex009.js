const listaDeTarefas = []
const pergunta1 = prompt('Diga uma atividade que voce precisa realizar no dia')
const pergunta2 = prompt('Diga outra atividade que voce precisa realizar no dia')
const pergunta3= prompt('Diga uma ultima atividade que voce precisa realizar no dia')

listaDeTarefas.push(pergunta1, pergunta2, pergunta3 )
console.log(listaDeTarefas)

const i= prompt('digite o índice de uma tarefa que você já realizou (1, 2 ou 3)')
listaDeTarefas.splice(i)
console.log(listaDeTarefas)