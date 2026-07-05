/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.Counter";
    static props = {
        onChange: { type: Function, optional: true },
        onDecrement: { type: Function, optional: true },
    };

    setup() {
        this.state = useState({ value: 0 });
    }

    increment() {
        this.state.value++;
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
    decrement(){
        if (this.state.value > 0) {
            this.state.value--;
            if (this.props.onDecrement) {
                this.props.onDecrement();
            }
        }else{
            alert('Or Kitna kam kary ga bhai....');
        }
    }
}