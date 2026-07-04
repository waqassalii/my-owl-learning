/** @odoo-module **/

import { Component } from "@odoo/owl";

export class CardDynamic extends Component {
    static template = "awesome_owl.CardDynamic";
    static props = {
            title: String,
            description: String,
            price: { type: Number, optional: true },
            imageUrl: String,
            isPopular: Boolean,
            year: Number,
        };
    handleRent() {
        alert(`You rented: ${this.props.title}`);
    }
}

