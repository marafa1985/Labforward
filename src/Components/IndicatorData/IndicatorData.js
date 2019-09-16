import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AcceptOnlyumber } from '../../Util'
import './IndicatorData.scss';

const IndicatorData = (props) => {
    const [newvalue, setnewvalue] = useState(0);

    const appendValue = () => {
        props.addNewValue(newvalue);
        setnewvalue(0);
    }
    const editValue = (index, value) => {
        AcceptOnlyumber(value) ? props.handleDataValue(index, value) : setnewvalue(newvalue);
    }
    const checknewvalue = (value) => {
        return AcceptOnlyumber(value) ? setnewvalue(value) : setnewvalue(newvalue);
    }
    return (
        <div className="data-block">
            <div>Acutal Data</div>
            <div className="data-list">
                {
                    props.data.map((value, index) => <div key={index} className="value-list">
                        <span>{index + 1}</span>
                        <input className="data-value" type="text" value={value} onChange={e => editValue(index, e.target.value)} />
                    </div>)
                }
                <div className="data-list">
                    <div className="value-list">
                        <span>New</span>
                        <input className="data-value" type="text" value={newvalue} onChange={e => checknewvalue(e.target.value)} />
                    </div>
                    <div className="value-list">
                        <span></span>
                        <button className="btn" onClick={e => appendValue()}>Add</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

IndicatorData.propTypes = {
    data: PropTypes.array,
    handleDataValue: PropTypes.func,
    addNewValue: PropTypes.func,
    props: PropTypes.number
}

export default IndicatorData

