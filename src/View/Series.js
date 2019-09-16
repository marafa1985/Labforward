import React, { Component } from 'react';
import { SeriesData } from "../Util";
import { Indicator } from '../Components/index';
import './Series.scss';
import SeriesHeader from '../Components/SeriesHeader/SeriesHeader';

class Series extends Component {

    constructor(props) {
        super(props)

        this.state = {
            seriesList: []
        }
    }
    componentDidMount() {
        // Simulate Request using Promise
        this.setState({
            seriesList: [...SeriesData()]
        });

    }
    addNewSeries = (seriesValue) => {
        //add new Series and push it as the top elemet i the array
        let newseries = [{ name: seriesValue, data: [] }, ...this.state.seriesList];

        this.setState({
            seriesList: newseries
        })

    }

    render() {
        return (
            <div className="series-list" >
                <SeriesHeader addNewSeries={this.addNewSeries} />
                {
                    this.state.seriesList.length > 0 && this.state.seriesList.map((series) => {
                        return <Indicator key={series.name} name={series.name} data={series.data} />
                    })
                }
            </div>
        )
    }
}


export default Series

