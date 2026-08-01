/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";
import { _t } from "@web/core/l10n/translation";

export class ConfigurationDialog extends Component {
    static template = "awesome_dashboard.ConfigurationDialog";
    static components = { Dialog };
    static props = {
        close: Function,
        items: Array,
        disabledItems: Array,
        onApply: Function,
    };

    setup() {
        this.state = useState({
            disabledItems: new Set(this.props.disabledItems),
        });
    }
    get title() {
        return _t("Dashboard Configuration");
    }

    onChange(itemId, isChecked) {
        if (isChecked) {
            this.state.disabledItems.delete(itemId);
        } else {
            this.state.disabledItems.add(itemId);
        }
    }

    apply() {
        this.props.onApply(Array.from(this.state.disabledItems));
        this.props.close();
    }
}