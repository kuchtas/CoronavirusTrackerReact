import React from 'react';
import './Summary.scss';

export default ({ global, filterTable }) => {
    const NewConfirmed = global.NewConfirmed;
    const TotalConfirmed = global.TotalConfirmed;
    const NewDeaths = global.NewDeaths;
    const TotalDeaths = global.TotalDeaths;
    const NewRecovered = global.NewRecovered;
    const TotalRecovered = global.TotalRecovered;

    return (
        <div className="summary">
            <span className="infoHeader">Global statistics:</span>
            <div className="sticky">
                <div>
                    <input onChange={filterTable} placeholder="Search..." type="text" className="searchCountry" />
                </div>

                <div className="infoNumber">
                    <span>New Confirmed</span>
                    <span className="globalNumber">{NewConfirmed}</span>
                </div>

                <div className="infoNumber">
                    <span>Total Confirmed</span>
                    <span className="globalNumber">{TotalConfirmed}</span>
                </div>

                <div className="infoNumber">
                    <span>New Deaths</span>
                    <span className="globalNumber">{NewDeaths}</span>
                </div>

                <div className="infoNumber">
                    <span>Total Deaths</span>
                    <span className="globalNumber">{TotalDeaths}</span>
                </div>

                <div className="infoNumber">
                    <span>New Recovered</span>
                    <span className="globalNumber">{NewRecovered}</span>
                </div>

                <div className="infoNumber">
                    <span>Total Recovered</span>
                    <span className="globalNumber">{TotalRecovered}</span>
                </div>

            </div>
        </div>
    )
}

