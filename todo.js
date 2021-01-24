const toDoForm = main.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = main.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

let idNumber = 1;

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumber;
    idNumber += 1;
    delBtn.innerText = "✅";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text: text
    }
    toDos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();