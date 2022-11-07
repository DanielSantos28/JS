
//declaração de const que cria uma váriavel onde o valor é fixo
const tarefaInput = document.querySelector('.tarefa-input');
const tarefaButton = document.querySelector('.tarefa-button');
const tarefaList = document.querySelector('.tarefa-list')
const filterOption = document.querySelector('.filter-tarefa');
const date = document.querySelector('.data');
//Eventos
tarefaButton.addEventListener('click', addTarefa);
tarefaList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTarefa);
//Adicionar tarefa
function addTarefa(event){
    event.preventDefault();
    const tarefaDiv = document.createElement('div');
    tarefaDiv.classList.add('caixa');
    const newTarefa = document.createElement('li');
    newTarefa.innerText = tarefaInput.value;
    const newData = document.createElement('data');
    newData.innerText = date.value;
    const ncaixa = document.createElement('TD');
    ncaixa.innerText = tarefaInput.value + ("\n") + "Limite: " + date.value;
    tarefaDiv.appendChild(ncaixa);
//Botão completos
    const completosButton = document.createElement('button');
    completosButton.innerHTML = '<i class="fas fa-check"></i>';
    completosButton.classList.add("completos-btn");
    tarefaDiv.appendChild(completosButton);
//Botão excluir(lixo)
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    tarefaDiv.appendChild(trashButton);
    tarefaList.appendChild(tarefaDiv);
    tarefaInput.value = "";
    date.value = "";
}       
//Função deletar e concluir
function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
        const tarefa = item.parentElement;
        tarefa.remove();
    }
    if(item.classList[0] === "completos-btn"){
        const tarefa = item.parentElement;
        tarefa.classList.toggle("completos");
    }
}
//Função filtrar tarefa
function filterTarefa(e){
    const todos = tarefaList.childNodes;
    todos.forEach(function(tarefa){
        switch(e.target.value){
            case "todos":
                tarefa.style.display = 'inline-block';
                break;
             case "completos":
                 if(tarefa.classList.contains('completos')){
                     tarefa.style.display='inline-block';
                 }else{
                     tarefa.style.display = "none";
                 }
                 break;
            case "incompletos":
                if(!tarefa.classList.contains('completos')){
                    tarefa.style.display='inline-block';
                }else{
                    tarefa.style.display = "none";
                }
                break;
        }
    });
}

