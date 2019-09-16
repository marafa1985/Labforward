import React,{useState} from 'react';
import PropTypes from 'prop-types';

const SeriesHeader = (props) => {
    const [seriesValue, setseriesValue] = useState('')
    return (
        <div>
            <input className="input-text" type="text" placeholder="Series name"
                value={seriesValue} onChange={e => setseriesValue(e.target.value)} />
            <button className="btn" onClick={() => props.addNewSeries(seriesValue)}>New Series</button>
        </div>
    )
}

SeriesHeader.propTypes = {
    addNewSeries: PropTypes.func
}
export default SeriesHeader
