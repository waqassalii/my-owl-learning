/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import { browser } from "@web/core/browser/browser";
import { Layout } from "@web/search/layout";
import { DashboardItem } from "./items/dashboard_item";
import { ConfigurationDialog } from "./configuration_dialog/configuration_dialog";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = { Layout, DashboardItem };

    setup() {
        this.display = { controlPanel: {} };
        this.action = useService("action");
        this.dialog = useService("dialog"); // Odoo dialog service
        this.statistics = useState(useService("awesome_dashboard.statistics"));

        // Store all registered items
        this.allItems = registry.category("awesome_dashboard").getAll();

        // Load initial state from local storage
        this.loadConfiguration();
    }

    loadConfiguration() {
        // Read disabled IDs array from localStorage (defaults to [] if empty)
        const disabled = JSON.parse(browser.localStorage.getItem("disabled_dashboard_items") || "[]");
        this.disabledItems = disabled;
        // Filter out items that are in the disabled list
        this.items = this.allItems.filter((item) => !disabled.includes(item.id));
    }

    openConfiguration() {
        // Opens the ConfigurationDialog modal
        this.dialog.add(ConfigurationDialog, {
            items: this.allItems,
            disabledItems: this.disabledItems,
            onApply: (disabledItems) => {
                // Save updated array as string in browser storage
                browser.localStorage.setItem("disabled_dashboard_items", JSON.stringify(disabledItems));
                // Reload filtered items list
                this.loadConfiguration();
            },
        });
    }

    openCustomers() {
        this.action.doAction("base.action_partner_form");
    }

    openLeads() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Leads",
            res_model: "crm.lead",
            views: [
                [false, "list"],
                [false, "form"],
            ],
        });
    }
}

registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);