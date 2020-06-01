import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import 'bootstrap/dist/css/boostrap.css';
import countries from './countries.json';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfCountries: [...countries],
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <CountriesList listOfCountries={this.state.listOfCountries} />
          <nav>
            <Link to="/">Home</Link>
            <br />
            {/* <Link to="/countrydetail">Country Detail</Link> */}
          </nav>

          <Switch>
            <Route path="/:countrydetail" component={CountryDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
