/** @odoo-module **/

import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";
import { reactive } from "@odoo/owl";

export const statisticsService = {
    dependencies: ["rpc"],
    start(env, { rpc }) {
        // Create a standalone reactive object
        const stats = reactive({});
        // memoize ensures /awesome_dashboard/statistics is only called ONCE
        // const loadStatistics = memoize(() => {
        //     return rpc("/awesome_dashboard/statistics");
        // });
        async function loadData() {
            const data = await rpc("/awesome_dashboard/statistics");
            Object.assign(stats, data); // Updates in place
        }
        // Initial load
        loadData();

        // Reload every 10 seconds (10000 ms)
        setInterval(loadData, 10000);

        // Return the reactive object directly
        return stats;

        // return {
        //     loadStatistics,
        // };
    },
};
// Register our new service under the name "awesome_dashboard.statistics"
registry.category("services").add("awesome_dashboard.statistics", statisticsService);