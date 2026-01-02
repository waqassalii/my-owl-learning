/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.counter";
    static props = {
        title : String,
        onChange : {type : Function, optional : true} /*onChange is a variable here not method read notes point onChange counter*/
    }
    setup(){this.state = useState({value:1})}
    increment(){
        this.state.value++;
        // 2. If the parent passed a function, call it!
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
    decrement(){
        this.state.value--;
    }
}
