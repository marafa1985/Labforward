import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
const Indicator = (props) => {

    const fromateSignal = (arrdata) => {
        return arrdata.map(data => data > 5 ? 1 : 0);
    }
    const options = {
        chart: {
            zoom: {
                enabled: false
            },

        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            // labels: {
            //     formatter: function (val) {
            //         return (val % 3)===0 ? val:'.';
            //     }
            // }
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: props.name,
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },

    }
    const series = [{
        name: "irregularities",
        data: props.data
    }];

    const signal = [{
        name: "Signal",
        data: fromateSignal(props.data)
    }];


    return (
        <div>
            <Chart options={options} series={series} type="line" height="150" width="900" />
            <Chart options={options} series={signal} type="line" height="150" width="900" />
        </div>
    )
}

Indicator.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string
}

export default Indicator

