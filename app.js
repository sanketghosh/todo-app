// selectors 
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


// event listeners 
todoButton.addEventListener('click', addTodo)

// functions 
function addTodo(event) {
    //prevent form from submitting and refreshing
    event.preventDefault();

    //creating the div

    // Todo DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //create lI
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //create the CHECKED button
    const checkedButton = document.createElement('button')
    checkedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    checkedButton.classList.add('checked-btn')
    todoDiv.appendChild(checkedButton)

    //create the DELETE button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('trash-btn')
    todoDiv.appendChild(deleteButton)

    //appending the todo-div to the todo-list
    todoList.appendChild(todoDiv)

    //clearing the input field
    todoInput.value = ''
}