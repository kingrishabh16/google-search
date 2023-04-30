import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.State

    return (
      <div className="container">
        <img
          className="google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="searchItemList">
          <div className="searchCont">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
            />
            <input
              type="text"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
          <ul>
            {suggestionsList.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetail={eachSuggestion}
                key={eachSuggestion.id}
                searchSuggestion={this.searchSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
