/** @odoo-module **/

import { registry } from "@web/core/registry";
import { NumberCard } from "./number_card/number_card";
import { PieChartCard } from "./pie_chart_card/pie_chart_card";

const itemsRegistry = registry.category("awesome_dashboard");

itemsRegistry.add("average_quantity", {
    id: "average_quantity",
    description: "Average t-shirts per order",
    Component: NumberCard,
    props: (data) => ({
        title: "Average T-Shirts / Order",
        value: data.total_amount ?? 0,
    }),
});

// this is how we debug the code in JS
// put the debugger amd the browser will freeze execution here
/*itemsRegistry.add("average_time", {
    id: "average_time",
    description: "Average time for an order",
    Component: NumberCard,
    props: (data) => {
        // Highlight-start
        debugger; // The browser will freeze execution here
        // Highlight-end
        return {
            title: "Average Time (Hours)",
            value: data.average_time ?? 0,
        };
    },
});*/

itemsRegistry.add("average_time", {
    id: "average_time",
    description: "Average time for an order",
    Component: NumberCard,
    props: (data) => ({
        title: "Average Time (Hours)",
        value: data.average_time ?? 0,
    }),
});

itemsRegistry.add("nb_cancelled_orders", {
    id: "nb_cancelled_orders",
    description: "Cancelled orders",
    Component: NumberCard,
    props: (data) => ({
        title: "Cancelled Orders",
        value: data.nb_cancelled_orders ?? 0,
    }),
});
itemsRegistry.add("new_orders", {
    id: "new_orders",
    description: "New orders",
    Component: NumberCard,
    props: (data) => ({
        title: "New Orders",
        value: data.nb_new_orders ?? 0,
    }),
});

itemsRegistry.add("orders_by_size", {
    id: "orders_by_size",
    description: "Orders by size",
    Component: PieChartCard,
    size: 2,
    props: (data) => ({
        title: "Orders by Size",
        data: data.orders_by_size ?? {},
    }),
});