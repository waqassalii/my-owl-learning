/** @odoo-module **/

// todo_list.js
import { Component, useState} from "@odoo/owl";
import { TodoItem } from "./todo_item";
import {useAutofocus} from "@awesome_owl/utils"

export class TodoList extends Component {
    static template = "awesome_owl.TodoList";
    static components = { TodoItem };

    setup() {
        this.inputRef = useAutofocus("todoInput");
        this.nextId = 1
        this.todos = useState([]);
    }
    addTodo(ev) {
        // Bonus: Check if Enter (13) was pressed and input is not just spaces
        if (ev.keyCode === 13 && ev.target.value.trim() !== "") {
            this.todos.push({
                id: this.nextId++,
                description: ev.target.value,
                isCompleted: false,
            });
            ev.target.value = ""; // Clear the input
        }
    }
    toggleTodo(todoId) {
    const todo = this.todos.find((t) => t.id === todoId);
    if (todo) {
        todo.isCompleted = !todo.isCompleted;
    } }
    removeTodo(todoId) {
    // Keep only the todos that DO NOT match the clicked ID
    this.todos.splice(0, this.todos.length, ...this.todos.filter(t => t.id !== todoId));
    }

}