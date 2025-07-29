// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// create an  Array to gets todos
let todos = [];

let isEditing = false;
let editingIndex = null;


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

//updated todo
function updateTodo(index, newTodo){
    todos[index] = newTodo;
    renderTodos();
}

//reset 
function resetForm() {
    todoInput.value = '';
    isEditing = false;
    editingIndex = null;
    todoForm.querySelector('button').textContent = 'Add Todo';
}


function renderTodos(){

    //clear existing list
    todoList.innerHTML= "";

    todos.forEach((todo, index) => {
        //create li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        //create span for li text
        const span = document.createElement('span');
        span.textContent = todo;
        span.style.cursor = 'pointer';

        //update work
        span.addEventListener('click', () =>{
            isEditing = true;
            editingIndex = index;
            todoInput.value = todo;
            todoForm.querySelector('button').textContent = 'Update todo';
        })

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = "delete";

        //delete handler
        deleteButton.addEventListener('click', ()=>{
            deleteTodo(index);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

    });
}



//from handler
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //add new todo
    const newTodo = todoInput.value.trim();

    //check input not empty
    if(newTodo){

        //check if editing mode
        if(isEditing){
            updateTodo(editingIndex, newTodo);
        }else{
            addTodo(newTodo);
        }
    }
    resetForm();
})
