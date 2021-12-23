// selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');


// eventlistner
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// functios
function addTodo(event) {
    // prevent defualt submitting
    event.preventDefault();
    // todo Div
    todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // trash mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = '';
}


function deleteCheck(e){
    const item = e.target;
    // delete todo
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    // check mark
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}