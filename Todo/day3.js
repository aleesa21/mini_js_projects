let todo_lists = [];

function addTodo() {
  let todo = document.getElementById("input").value;
  if (todo) {
    todo_lists.push(todo);
    document.getElementById("input").value = "";
  }
  showtodo();
}

function showtodo() {
  document.getElementById("todo-lists").innerHTML = "";
  document.getElementById("count").innerHTML=`you have ${todo_lists.length} pending task`
  if (todo_lists.length > 0) {
    todo_lists.forEach((item, index) => {
      document.getElementById("todo-lists").innerHTML += `<div class="one-todo">
                    <div class="todos">${item}</div>
                    <button class="delete-btn" onclick="deleteTodo(${index})">-</button>
                    </div> `;
    });
  }
}

function deleteTodo(index) {
  todo_lists.splice(index, 1);
  showtodo();
}


function clearlist(){
    todo_lists=[];
    showtodo();

}

