import { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { observer } from 'mobx-react';
import ChartsSGKT from "./ChartsSGK_T/ChartsSGKT";
import ChartsNMEA from "./ChartsNMEA/ChartsNMEA";
import DataStoresSGKT from "../../stores/DataStoresSGKT";
import DataStoresNMEA from "../../stores/DataStoresNMEAFormatGPGGA";

Chart.register(...registerables);

@observer
class Charts extends Component {
    private isFlag: boolean = true;

    private checkIsTypeStore(): boolean {
        const sgkText = DataStoresSGKT.getDataText();
        const nmeaText = DataStoresNMEA.getDataText();
    
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
                {this.checkIsTypeStore() ? <ChartsSGKT /> : <ChartsNMEA />}
            </div>
        );
    }
}

export default Charts;