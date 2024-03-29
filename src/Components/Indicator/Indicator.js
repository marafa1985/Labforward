import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import { ArrayMidValue, FromateSignal, ChartOption } from '../../Util';
import IndicatorData from '../IndicatorData/IndicatorData';
import ZValue from '../ZValue/FilterValue';
import './Indicator.scss';
import IndicatorHeader from './IndicatorHeader';


class Indicator extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            series: [],
            signal: [],
            data: [],
            indValue: 5,
            status: true
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
                data: FromateSignal(data, ArrayMidValue(data))
            }],
            data: [...data],
            indValue: ArrayMidValue(data)
        });
    }

    handleIndValue = (value) => {
        this.setState({
            indValue: value,
            signal: [{
                name: "Actual",
                data: FromateSignal(this.state.data, value)
            }]
        });
        // this.updateStatue(this.state.data);
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
                data: FromateSignal(newdata, this.state.indValue)
            }],
            series: [{
                name: "Actual",
                data: [...newdata]
            }],
            data: [...newdata]
        });
    }
    headerClicked = () => {
        this.setState({
            status: !this.state.status
        })
    }
    render() {
        return (
            this.state.data &&
            <div className="acc-item">
                <div className={(this.state.status ? "active" : "")}>
                    <IndicatorHeader name={this.props.name} headerClicked={this.headerClicked} />
                    <div className="acc-body">
                        <div className="toolbox">
                            <ZValue indValue={Number(this.state.indValue)} handleIndValue={this.handleIndValue} />
                            <IndicatorData data={this.state.data}
                                handleDataValue={this.handleDataValue} addNewValue={this.addNewValue} />
                        </div>
                        <div>
                            <Chart options={ChartOption('Actual Data')} series={this.state.series} type="line" height="150" />
                            <Chart options={ChartOption('Areas of interest')} series={this.state.signal} type="line" height="150" />
                        </div>

                    </div>
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

