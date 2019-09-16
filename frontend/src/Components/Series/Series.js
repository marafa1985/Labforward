import React from 'react';
import { SeriesData } from "../../Util";
import Indicator from './Indicator/Indicator';

const Series = (props) => {
    return (
        <div>
            {SeriesData().map((series) => {
                return <Indicator key={series.name} name={series.name} data={series.data} />
            })}
        </div>
    )
}

export default Series

