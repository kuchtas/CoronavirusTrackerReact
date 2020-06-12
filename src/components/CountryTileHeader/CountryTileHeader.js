import React from 'react';
import './CountryTileHeader.scss'

export default () => {
    return (
        <div className="countryTileHeader">
            <div className="tile">Country</div>
            <div className="tile">Total Confirmed</div>
            <div className="tile">Total Deaths</div>
            <div className="tile">Total Recovered</div>
        </div>
    )
}