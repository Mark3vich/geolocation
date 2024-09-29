import { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { observer } from 'mobx-react';
import ChartsSGK_T from "./ChartsSGK_T/ChartsSGK_T";
import ChartsNMEA from "./ChartsNMEA/ChartsNMEA";
import DataTextStoresSGK_T from "../../stores/DataTextStoresSGK_T";
import DataTextStoresNMEA from "../../stores/DataTextStoresNMEA";

Chart.register(...registerables);

@observer
class Charts extends Component {
    private isFlag: boolean = true;

    private checkIsTypeStore(): boolean {
        const sgkText = DataTextStoresSGK_T.getDataText();
        const nmeaText = DataTextStoresNMEA.getDataText();
    
        if (sgkText && sgkText.length > 0) {
            this.isFlag = true;
        } else if (nmeaText && nmeaText.length > 0) {
            this.isFlag = false;
        }
    
        return this.isFlag;
    }
    render() {
        return (
            <div className="container">
                {this.checkIsTypeStore() ? <ChartsSGK_T /> : <ChartsNMEA />}
            </div>
        );
    }
}

export default Charts;