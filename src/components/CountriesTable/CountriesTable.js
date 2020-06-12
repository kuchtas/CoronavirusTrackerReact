import React from 'react';
import CountryTile from '../CountryTile/CountryTile';
import './CountriesTable.scss'
import CountryTileHeader from '../CountryTileHeader/CountryTileHeader';

export default ({ countries, sortTableAsc, sortTableDes }) => {
    return (
        <div className="countriesTable">
            <div className="buttons">
                <div><button onClick={() => { sortTableAsc('Slug') }}>Country ascending</button> <button onClick={() => { sortTableDes('Slug') }}>Country descending</button> </div>
                <div><button onClick={() => { sortTableAsc('TotalConfirmed') }}>Total Confirmed ascending</button> <button onClick={() => { sortTableDes('TotalConfirmed') }}>Total Confirmed descending</button></div>
                <div><button onClick={() => { sortTableAsc('TotalDeaths') }}>Total Deaths ascending</button> <button onClick={() => { sortTableDes('TotalDeaths') }}>Total Deaths descending</button></div>
                <div><button onClick={() => { sortTableAsc('TotalRecovered') }}>Total Recovered ascending</button> <button onClick={() => { sortTableDes('TotalRecovered') }}>Total Recovered descending</button></div>
            </div>

            <CountryTileHeader
            />
            {countries.map(country =>
                < CountryTile
                    Country={country.Country}
                    TotalConfirmed={country.TotalConfirmed}
                    TotalDeaths={country.TotalDeaths}
                    TotalRecovered={country.TotalRecovered}
                />
            )}
        </div>
    )
}

