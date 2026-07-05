/** @odoo-module **/

import {Component, useState} from "@odoo/owl";
import {Counter} from "./counter/counter";
import {Card} from "./card/card";
import {CardDynamic} from "./card/card_dynamic";

export class Playground extends Component {
    static template = "awesome_owl.Playground";
    static components = {Counter, Card, CardDynamic};

    setup() {
        this.sum = useState({value: 0});
        this.cartSum = useState({value: 0});
        this.counterValues = {
            counter1: 0,
            counter2: 0,
        };
        this.cartValues = useState({
            cart1: {quantity: 0, total: 0},
            cart2: {quantity: 0, total: 0},
            cart3: {quantity: 0, total: 0},
            cart4: {quantity: 0, total: 0},
            cart5: {quantity: 0, total: 0},
            cart6: {quantity: 0, total: 0},
        });
        this.cartSummary = useState({
            totalQuantity: 0,
            totalPrice: 0
        });
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
    updateCart = (cartId, quantity, price) => {
        this.cartValues[cartId].quantity = quantity;
        this.cartValues[cartId].total = quantity * price;
        let totalQty = 0;
        let totalPrice = 0;

        for (let key in this.cartValues) {
            totalQty += this.cartValues[key].quantity;
            totalPrice += this.cartValues[key].total;
        }

        this.cartSummary.totalQuantity = totalQty;
        this.cartSummary.totalPrice = totalPrice;
        const total = this.cartValues.cart1.total +
            this.cartValues.cart2.total +
            this.cartValues.cart3.total +
            this.cartValues.cart4.total +
            this.cartValues.cart5.total +
            this.cartValues.cart6.total;
        this.cartSum.value = total;
    }

}
