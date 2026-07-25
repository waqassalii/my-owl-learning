/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
    static template = "awesome_owl.TodoList";
    static components = {TodoItem};

    setup() {
         this.state = useState({
            todos: [
                { id: 1, description: "Buy milk", isCompleted: false },
                { id: 2, description: "Learn OWL", isCompleted: false },
                { id: 3, description: "Build POS", isCompleted: true },
            ]
         });
    }
}