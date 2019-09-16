import React from 'react'
import PropTypes from 'prop-types'
import './ZValue.scss';

const ZValue = (props) => {
    return (
        <div>
            <span>Z-Score:</span>
            <input className="input-text" type="number" value={props.indValue} onChange={e => props.handleIndValue(e.target.value)} />
        </div>
    )
}

ZValue.propTypes = {
    indValue:PropTypes.number,
    handleIndValue: PropTypes.func
}

export default ZValue

