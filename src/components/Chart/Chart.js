import './Chart.css';
import ChartBar from "./ChartBar";
import React from "react";

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(d => d.value);

    const totalMaxAmount = Math.max(...dataPointsValues);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={totalMaxAmount}
            />)}
    </div>

}

export default Chart;