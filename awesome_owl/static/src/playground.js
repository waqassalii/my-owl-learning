/** @odoo-module **/

import {Component, useState} from "@odoo/owl";
import {Counter} from "./counter/counter";
import {Card} from "./card/card";
import {CardDynamic} from "./card/card_dynamic";
import {TodoList} from "./todo/todo";


export class Playground extends Component {
    static template = "awesome_owl.Playground";
    static components = {Counter, Card, CardDynamic, TodoList};

    setup() {
        this.sum = useState({value: 0});
        this.cartSum = useState({value: 0});
        this.counterValues = {
            counter1: 0,
            counter2: 0,
        };
        this.cartValues = {
            cart1: 0,
            cart2: 0,
            cart3: 0,
            cart4: 0,
            cart5: 0,
            cart6: 0,
        };
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

    // Arrow function = auto-bind
    updateSum = (counterId, newValue) => {
        this.counterValues[counterId] = newValue;
        const total = this.counterValues.counter1 + this.counterValues.counter2;
        this.sum.value = total;
    }
    updateCart = (cartId, newValue) => {
        this.cartValues[cartId] = newValue;
        const total = this.cartValues.cart1 + this.cartValues.cart2 + this.cartValues.cart3 + this.cartValues.cart4 + this.cartValues.cart5 + this.cartValues.cart6;
        this.cartSum.value = total;
    }

}
