/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
// useService is an Odoo framework hook, so it belongs to Odoo's core modules, not OWL itself.
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { DashboardItem } from "./items/dashboard_item";
import { PieChart } from "./pie_chart/pie_chart";
import { AllChart } from "./pie_chart/chart";



class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = { Layout, DashboardItem, PieChart, AllChart };

    setup() {
         this.display = { controlPanel: {} };
         this.action = useService("action");
         this.rpc = useService("rpc");
         this.statistics = useState({});
         this.statsService = useService("awesome_dashboard.statistics");
         onWillStart(async ()=>{
             const result = await this.statsService.loadStatistics();
            Object.assign(this.statistics, result);
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

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
