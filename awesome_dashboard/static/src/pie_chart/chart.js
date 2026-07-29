/** @odoo-module **/

import { Component, onWillStart, onMounted, onWillUnmount, useRef } from "@odoo/owl";
import { loadJS } from "@web/core/assets";

export class AllChart extends Component {
        static template = "awesome_dashboard.AllChart";
        static props = {
            type: { type: String, optional: true },//as we are going to pass different charts
            label: String,
            data: Object,
        };
        setup() {
            this.canvasRef = useRef("allCanvas");
            let chart;

            onWillStart(async () => {
            await loadJS("/web/static/lib/Chart/Chart.js");
            });

            onMounted(() => {
            chart = new Chart(this.canvasRef.el, {
                type: this.props.type,
                data: {
                    labels: Object.keys(this.props.data),
                    datasets: [{
                        label: this.props.label,
                        data: Object.values(this.props.data),
                    }]
                }
                });
            });

            onWillUnmount(() => {
                if (chart) {
                    chart.destroy();
                }
            });

    }


}