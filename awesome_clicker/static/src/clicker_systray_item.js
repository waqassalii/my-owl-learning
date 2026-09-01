/** @odoo-module **/

import { Component, useState, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";


export class ClickerSystrayItem extends Component {
    static template = "awesome_clicker.ClickerSystrayItem";

    setup() {
        this.state = useState({ clicks: 0 });
        this.actionService = useService("action");

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

    openClientAction() {
        this.actionService.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker",
        });
    }
}
// registry.category("systray").add("key", {Component: MyComponent, sequence: 10, /* Optional: controls position in top bar */});
registry.category("systray").add("awesome_clicker.ClickerSystrayItem", {Component: ClickerSystrayItem,});