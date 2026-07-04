/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";
import { CardDynamic } from "./card/card_dynamic";

export class Playground extends Component {
    static template = "awesome_owl.Playground";
    static components = { Counter, Card, CardDynamic };
    setup() {
        this.carData = {
            title: "Dodge Challenger",
            description: "High power car , nothing matches this",
            price: 129,
            year: 2026,
            imageUrl: "awesome_owl/static/description/dodge.jpeg",
            isPopular: true,
        };
        this.carData2 = {
            title: "BMW i8",
            description: "Hybrid sports car",
            price: 149,
            year: 2025,
            imageUrl: "awesome_owl/static/description/bmw.jpeg",
            isPopular: false,
        };
    }
}
