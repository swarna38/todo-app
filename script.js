// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// create an  Array to gets todos
let todos = [];

function renderTodos(){

    //clear existing list
    todoList.innerHTML= " ";

    todos.forEach((todo, index) => {
        //create li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = todo ;

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = "delete";

        //delete handler
        deleteButton.addEventListener('click', ()=>{
            deleteTodo(index);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);

    });
}


//add todo
function addTodo(todo){
    todos.push(todo);
    renderTodos();
}

//delete todo by index
function deleteTodo(index){
    todos.splice(index, 1);
    renderTodos();
}

//from handler
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //add new todo
    const newTodo = todoInput.value.trim();

    if(newTodo){
        addTodo(newTodo);
        //clear inputfield
        todoInput.value = "";
    }
})
