import React from 'react'
import PropTypes from 'prop-types'
import './FilterValue.scss';

const FilterValue = (props) => {
    return (
        <div>
            <span>Z-Score:</span>
            <input className="input-text" type="number" value={props.indValue} onChange={e => props.handleIndValue(e.target.value)} />
        </div>
    )
}

FilterValue.propTypes = {
    indValue:PropTypes.number,
    handleIndValue: PropTypes.func
}

export default FilterValue

