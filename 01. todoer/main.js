// Variables
const submitBtn = document.querySelector('.btn-submit');
const todoList = document.querySelector('.todoList');

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', getTodos);

// Adding to UI
submitBtn.addEventListener('click', (e) => {
    // Prevent default submit
    e.preventDefault();

    // Get input values
    const input = document.getElementById('input').value;
    if (input !== '') {
        // Clear Fields
        document.getElementById('input').value = '';
        // Create Element
        const todoContent = document.createElement('div');
        todoContent.setAttribute('class', 'todo-content');
        const p = document.createElement('p');
        p.setAttribute('id', 'check');
        p.appendChild(document.createTextNode(input));
        const delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'fa fa-trash trash btn-del');
        // Append
        todoContent.appendChild(p);
        todoContent.appendChild(delBtn);
        todoList.appendChild(todoContent);
        // Store
        saveList(input);
        // Remove Error Message
        const borderBtm = document.getElementById('input');
        submitBtn.style.color = 'var(--desaturated-dark-cyan)'
        borderBtm.style.borderBottom = '1px solid var(--desaturated-dark-cyan)';
    } else {
        // Error Message
        const borderBtm = document.getElementById('input');
        submitBtn.style.color = 'var(--red)';
        borderBtm.style.borderBottom = '1px solid var(--red)';
        document.querySelector('form').classList.add('shake');
    }
});

// Remove
todoList.addEventListener('click', (e) => {
    const item = e.target;
    if (item.classList.contains('btn-del')) {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('remove');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    };
});

// Local Storage
function saveList(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(todo => {
        // Create Element
        const todoContent = document.createElement('div');
        todoContent.setAttribute('class', 'todo-content');
        const p = document.createElement('p');
        p.setAttribute('id', 'check');
        p.appendChild(document.createTextNode(todo));
        const delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'fa fa-trash trash btn-del');
        // Append
        todoContent.appendChild(p);
        todoContent.appendChild(delBtn);
        todoList.appendChild(todoContent);
    });
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}