import './styles.css';

import {Todo, TodoList} from './classes'
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';



const todoList = new TodoList();

const tarea1 = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Aprender JavaScript');

todoList.nuevoTodo(tarea1);
todoList.nuevoTodo(tarea2);

console.log(todoList);
