import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '../../img/arrow-down.svg';

function IndicatorHeader(props) {
    return (
        <div className="acc-header" onClick={props.headerClicked}>
            <div className="acc-title ">
                {props.name}
            </div>
            <div className="icon">
                <img src={ArrowDown} alt="props.alt" />
            </div>
        </div>
    )
}

IndicatorHeader.propTypes = {
    name: PropTypes.string,
    headerClicked: PropTypes.func
}

export default IndicatorHeader

