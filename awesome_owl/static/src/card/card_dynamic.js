/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class CardDynamic extends Component {
    static template = "awesome_owl.CardDynamic";
    static props = {
        id: { type: String, required: true },
        onChange: { type: Function, required: true },
        title: String,
        description: String,
        price: { type: Number, optional: true },
        imageUrl: String,
        isPopular: Boolean,
        year: Number,
    };
    setup() {
        this.count = useState({ value: 0 });
    }
    addCart() {
        this.count.value++;
        if (this.props.onChange) {
            console.log("i am inside addCart ", this.props.id);
            this.props.onChange(this.props.id, this.count.value);
        }
    }
    removeCart(){
        if (this.count.value > 0) {
            this.count.value--;
            if (this.props.onChange) { this.props.onChange(this.props.id, this.count.value) }
        }else{
            alert('Abay Nikal gaii sari cart say bs kr....');
        }
    }
}

