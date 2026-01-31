/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import { Card } from "./card"; // Correct: path to your card.js

export class Playground extends Component {
    static template = "awesome_owl.playground";
    // This tells the Playground: "If you see <Card /> in XML, use this class"
    static components = { Card };

    setup() {
        this.state = useState({
        value: 0,
        cardTitle: "Dynamic Title",
        cardContent: markup("<b><i>Content from State</i></b>,using markup it tells odoo it is safe to show HTML when you use t-out"),
        cards: [
            { id: 1, title: "Card 1", content: "First content" },
            { id: 2, title: "Card 2", content: "Second content" },
            { id: 3, title: "Card 3", content: "Third content" },
        ]
         });
    }
    increment() {
        this.state.value++;
    }
    decrement = () => {
        if ( this.state.value > 0) {
        this.state.value--;
    }
    };

}
