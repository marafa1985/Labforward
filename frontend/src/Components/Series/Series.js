import React, { Component } from 'react';
import { SeriesData } from "../../Util";
import Indicator from './Indicator/Indicator';
import './Series.scss';
class Series extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seriesList: [...SeriesData()],
            newseries: ''
        }
    }
    handleClick = (value) => {
        this.setState({
            newseries: value
        })
    }
    addNewSeries = () => {
        //add new Series and push it as the top elemet i the array
        let newseries = [{ name: this.state.newseries, data: [] }, ...this.state.seriesList];

        this.setState({
            seriesList: newseries
        })

    }
    render() {
        return (
            <div className="series-list" >
                <div>
                    <input className="input-text" type="text" placeholder="Series name"
                        value={this.state.newseries} onChange={e => this.handleClick(e.target.value)} />
                    <button className="btn" onClick={() => this.addNewSeries()}>New Series</button>
                </div>
                {this.state.seriesList.length > 0 && this.state.seriesList.map((series) => {
                    return <Indicator key={series.name} name={series.name} data={series.data} />
                })}
            </div >
        )
    }
}

export default Series

