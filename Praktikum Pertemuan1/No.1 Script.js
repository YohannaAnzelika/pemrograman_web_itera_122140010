document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTodoBtn = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");
  const clearTodosBtn = document.getElementById("clear-todos");

  // Ambil data dari localStorage saat halaman dimuat
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Render daftar tugas
  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = `p-3 border rounded-lg flex justify-between items-center transition-all duration-300 shadow-md ${
        todo.completed ? "bg-green-200 line-through" : "bg-white"
      }`;

      li.innerHTML = `
        <span class="flex items-center text-gray-800 text-lg">
          ${todo.completed ? "✅" : "📝"} ${todo.text}
        </span>
        <div class="flex gap-2">
          <button class="toggle-btn bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-all" data-index="${index}">✔</button>
          <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all" data-index="${index}">✖</button>
        </div>
      `;

      todoList.appendChild(li);
    });

    // Simpan ke localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Tambahkan tugas baru
  addTodoBtn.addEventListener("click", function () {
    const text = todoInput.value.trim();
    if (text === "") return;

    todos.push({ text, completed: false });
    todoInput.value = "";
    renderTodos();
  });

  // Event delegation untuk toggle dan hapus
  todoList.addEventListener("click", function (e) {
    const index = e.target.getAttribute("data-index");

    if (e.target.classList.contains("toggle-btn")) {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    }

    if (e.target.classList.contains("delete-btn")) {
      todos.splice(index, 1);
      renderTodos();
    }
  });

  // Hapus semua tugas
  clearTodosBtn.addEventListener("click", function () {
    todos = [];
    renderTodos();
  });

  // Render ulang saat halaman dibuka
  renderTodos();
});
