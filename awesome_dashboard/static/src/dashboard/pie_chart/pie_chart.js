/** @odoo-module **/

import { Component, onWillStart, onMounted, onWillUnmount, useRef } from "@odoo/owl";
import { loadJS } from "@web/core/assets";

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
}