/** @odoo-module **/

// todo_item.js
import { Component } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "awesome_owl.TodoItem";
    static props = {
        todo: {
            type: Object,
            shape: { id: Number, description: String, isCompleted: Boolean },
        },
        // This is the "phone line" to the parent Since the Parent (TodoList) owns the data,
        //the Child (TodoItem) must "call" the Parent to ask for a change.
        toggleState: { type: Function },
        removeTodo: { type: Function },
    };
    onChange() {
        this.props.toggleState(this.props.todo.id);
    }
}