import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      country: '',
    };
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (
      this.props.match.params.countrydetail !==
      prevProps.match.params.countrydetail
    ) {
      for (let country = 0; country < countries.length; country++) {
        // console.log(countries[country]);
        if (countries[country].cca3 === this.props.match.params.countrydetail) {
          this.setState({
            country: countries[country],
          });
        }
      }
    }
  }

  render() {
    console.log(this.state.country);
    return (
      <div>
        <ul>
          <li>Capital {this.state.country.capital}</li>
          <li>Area {this.state.country.area}</li>
          <li>
            Borders <Link to={this.state.country.borders}></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CountryDetail;
