/** @odoo-module **/

import { Component, useState, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class ClickerSystrayItem extends Component {
    static template = "awesome_clicker.ClickerSystrayItem";

    setup() {
        this.state = useState({ clicks: 0 });

        useExternalListener(
            document.body,
            "click",
            (ev) => {
                // Ignore clicks that happen inside our systray item
                if (ev.target.closest(".o_nav_entry")) {
                    return;
                }
                this.state.clicks++;
            },
            { capture: true }
        );
    }

    increment() {
        this.state.clicks += 10;
    }
}
// registry.category("systray").add("key", {Component: MyComponent, sequence: 10, /* Optional: controls position in top bar */});
registry.category("systray").add("awesome_clicker.ClickerSystrayItem", {Component: ClickerSystrayItem,});