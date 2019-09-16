import React from 'react'
import PropTypes from 'prop-types'

const FilterValue = (props) => {
    return (
        <div>
            <span>Filter Actual Data:</span>
            <input type="number" value={props.indValue} onChange={e => props.handleIndValue(e.target.value)} />
        </div>
    )
}

FilterValue.propTypes = {
    indValue:PropTypes.number,
    handleIndValue: PropTypes.func
}

export default FilterValue

