/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class ClientAction extends Component {
    static template = "awesome_clicker.ClientAction";
}

registry.category("actions").add("awesome_clicker.client_action", ClientAction);