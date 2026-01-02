/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import { Counter } from "./counter"

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = { Counter }

    setup() {
    this.state = useState({sum:2})
    }
//incrementSum method would be triggered by children components
    incrementSum(){
        this.state.sum++
    }

}
