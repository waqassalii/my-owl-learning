/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.Counter";

    setup() {
        this.state = useState({ value: 0 });
    }

    increment() {
        this.state.value++;
    }
    decrement(){
        if (this.state.value > 0) {
            this.state.value--;
        }else{
            throw new Error('Or Kitna kam kary ga bhai....');
        }
    }
}