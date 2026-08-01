/** @odoo-module **/

import { Component, onWillStart, onMounted, onWillUnmount, useRef } from "@odoo/owl";
import { loadJS } from "@web/core/assets";
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";

export class PieChart extends Component {
    static template = "awesome_dashboard.PieChart";
    static props = {
        label: String || "",
        data: Object ?? {},
    };

    setup() {
        // useRef we used it to get HTML element
        this.canvasRef = useRef("canvas");
        let chart;
        this.action = useService("action");

        // Lazy load Chart.js before the component renders
        onWillStart(async () => {
            await loadJS("/web/static/lib/Chart/Chart.js");
        });

        // Draw the chart once the canvas is actually on the screen
        onMounted(() => {
            chart = new Chart(this.canvasRef.el, {
                type: "pie",
                data: {
                    labels: Object.keys(this.props.data),
                    datasets: [{
                        label: this.props.label,
                        data: Object.values(this.props.data),
                    }]
                },
                options: {
                    onClick: (evt, activeElements) => {
                        if (activeElements && activeElements.length > 0) {
                            // Chart.js 2.x uses _index
                            const index = activeElements[0]._index ?? activeElements[0].index;
                            const sizeKeys = Object.keys(this.props.data);
                            const selectedSize = sizeKeys[index];

                            if (selectedSize) {
                                this.openOrdersForSize(selectedSize);
                            }
                        }
                    },
                }
            });
        });


        // Clean up memory when the component is removed when it is removed from screen
        onWillUnmount(() => {
            if (chart) {
                chart.destroy();
            }
        });

    }
    openOrdersForSize(size) {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: _t("Orders"),
            res_model: "sale.order",
            views: [
                [false, "list"],
                [false, "form"],
            ],
            // domain: [["size", "=", size]],
        });
    }
}