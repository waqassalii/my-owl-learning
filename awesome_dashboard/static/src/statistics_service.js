/** @odoo-module **/

import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";

export const statisticsService = {
    dependencies: ["rpc"],
    start(env, { rpc }) {
        // memoize ensures /awesome_dashboard/statistics is only called ONCE
        const loadStatistics = memoize(() => {
            return rpc("/awesome_dashboard/statistics");
        });

        return {
            loadStatistics,
        };
    },
};
// Register our new service under the name "awesome_dashboard.statistics"
registry.category("services").add("awesome_dashboard.statistics", statisticsService);