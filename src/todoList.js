const todoForm = document.getElementById('toDos');
const toDoInput = document.getElementById('toDoList');
const myTodo = document.getElementById('list');

let toDos = [];

function saveToDos(){
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id =newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    myTodo.appendChild(li);
    myTodo.setAttribute('style', 'display:flex');
}


function myTodoList(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", myTodoList);

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

