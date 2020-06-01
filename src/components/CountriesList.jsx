import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.listOfCountries);
    return (
      <div>
        {/* <h1>{this.props.text}</h1> */}
        {this.props.listOfCountries.map((element) => {
          return (
            <ul>
              <li>
                <Link to={element.cca3}>{element.name.common}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
