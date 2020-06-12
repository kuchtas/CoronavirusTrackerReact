import React from 'react';
import './App.scss';
import CountriesTable from './CountriesTable/CountriesTable';
import Summary from './Summary/Summary';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      FETCHED_DATA: {
        Global: {},
        Countries: {}
      },
      countries: [],
      global: {}
    };
  };

  filterTable = (e) => {
    const filteredCountries = this.state.FETCHED_DATA.Countries.filter(country => country.Country.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      countries: filteredCountries
    })
  }

  sortTableAsc = (sortedField) => { //FETCHED_DATA should be the this.state
    const sortedTable = this.state.countries.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
    this.setState({
      countries: sortedTable
    })
  }
  sortTableDes = (sortedField) => { //FETCHED_DATA should be the this.state
    const sortedTable = this.state.countries.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return 1;
      }
      if (a[sortedField] > b[sortedField]) {
        return -1;
      }
      return 0;
    });
    this.setState({
      countries: sortedTable
    })
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary').then(response => {
      this.setState({
        FETCHED_DATA: response.data,
        countries: response.data.Countries,
        global: response.data.Global
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Covid-19 tracker #STAYHOME
        </header>
        <div className="content">
          <Summary
            global={this.state.global}
            filterTable={this.filterTable}
          />

          <CountriesTable
            countries={this.state.countries}
            sortTableAsc={this.sortTableAsc}
            sortTableDes={this.sortTableDes}
          />
        </div>
      </div>
    );
  }

}

export default App;
