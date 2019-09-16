import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import './Indicator.scss';
import ToolBox from '../ToolBox/ToolBox';
import FilterValue from '../FilterValue/FilterValue';

class Indicator extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },

                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    labels: {
                        formatter: function (val) {
                            return ((val + 1) % 2) === 0 ? val : '.';
                        }
                    }
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

            },
            series: [],
            signal: [],
            data: [],
            indValue: 5
        }
    }
    componentDidMount() {
        const { data } = this.props;
        this.setState({
            series: [{
                name: "Actual",
                data: [...data]
            }],
            signal: [{
                name: "Actual",
                data: this.fromatePeaks(data, this.midvalue(data))
            }],
            data: data
        });
    }
    midvalue = (data) => {
        return Math.max(...data) / 2;
    }
    fromatePeaks = (arrdata, newvalue) => {
        return arrdata.map(value => value > newvalue ? 1 : 0);
    }

    handleIndValue = (value) => {
        this.setState({
            indValue: value,
        });
        this.updateStatue(this.state.data);
    }
    handleDataValue = (idx, value) => {
        let newdata = this.state.data;
        newdata[idx] = value;
        this.updateStatue(newdata);
    }
    addNewValue = (newvalue) => {
        let newdata = this.state.data;
        newdata.push(newvalue);
        this.updateStatue(newdata);
    }

    updateStatue(newdata) {
        this.setState({
            signal: [{
                name: "Actual",
                data: this.fromatePeaks(newdata, this.state.indValue)
            }],
            series: [{
                name: "Actual",
                data: [...newdata]
            }]
        });
    }
    render() {
        return (
            this.state.data && <div>
                <div className="toolbox">
                    <FilterValue indValue={this.state.indValue} handleIndValue={this.handleIndValue} />
                    <ToolBox data={this.state.data}
                        handleDataValue={this.handleDataValue} addNewValue={this.addNewValue} />
                </div>
                <div>
                    <Chart options={this.state.options} series={this.state.series} type="line" height="150" />
                    <Chart options={this.state.options} series={this.state.signal} type="line" height="150" />
                </div>
            </div>
        )
    }
}

Indicator.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string
}

export default Indicator

