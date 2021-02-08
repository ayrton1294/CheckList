import './styles.css';

import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';



export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);

console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));

// const newTodo = new Todo('Aprender JavaScript');
// newTodo.imprimirClase();

console.log('Todos', todoList.todos)

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC124');
// sessionStorage.setItem('mi-key', 'ABC124');

// setTimeout(() => {
//     localStorage.removeItem('mi-key')
// }, 1500);