/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
    static template = "awesome_owl.TodoList";
    static components = {TodoItem};

    setup() {
         this.state = useState({todos: []});
         this.nextId = 1;
    }
   addTodo(ev) {
    if (ev.keyCode === 13) {  // 13 is Enter key code
        const input = ev.target;
        const description = input.value.trim();

        if (description) {
            this.state.todos.push({
                id: this.nextId++,
                description: description,
                isCompleted: false,
            });
            input.value = '';  // Clear input
        }
    }
}
}