/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import { TodoList } from "./todo/todo_list"

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = { TodoList };
}
