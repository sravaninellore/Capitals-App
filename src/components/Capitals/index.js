import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  onChangeCapital = event => this.setState({capital: event.target.value})

  render() {
    const {capital} = this.state

    const countryAndCapital = countryAndCapitalsList.filter(
      eachCountryAndCapital => eachCountryAndCapital.id === capital,
    )

    // console.log(countryAndCapital)

    const {country} = countryAndCapital[0]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <p className="question">
            <select className="drop-down-list" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCountryAndCapital => (
                <option
                  className="capital"
                  value={eachCountryAndCapital.id}
                  key={eachCountryAndCapital.id}
                >
                  {eachCountryAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </p>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
