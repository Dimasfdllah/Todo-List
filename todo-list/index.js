let todoList = ["Dimas Fadillah"];

function resetTodo() {
  const clearTodo = document.getElementById("result");
  while (clearTodo.firstChild) {
    clearTodo.removeChild(clearTodo.firstChild);
  }
}

function addTodo(index, add) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const tdResult = document.createElement("td");
  tr.appendChild(td);

  const buttonDone = document.createElement("input");
  buttonDone.value = "Delete";
  buttonDone.type = "button";
  buttonDone.onclick = () => {
    deleteTodo(index);
    display();
  };
  tdResult.appendChild(buttonDone);

  td.textContent = add;
  tr.appendChild(tdResult);

  const result = document.getElementById("result");
  result.appendChild(tr);
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  console.log(index);
}

function display() {
  resetTodo();
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const searchFilter = document.getElementById("search").value.toLowerCase();
    if (todo.toLowerCase().includes(searchFilter)) {
      addTodo(i, todo);
    }
  }
}

document.forms["todo-form"].onsubmit = (e) => {
  e.preventDefault();

  const todo = document.forms["todo-form"]["todo"].value;
  todoList.push(todo);
  document.forms["todo-form"].reset();
  console.log(todoList);
  display();
};
const todoSearch = document.getElementById("search");
const defaultValue = display();
todoSearch.onkeydown = (e) => {
  if (e.key == "Enter") {
    display();
  }
};
