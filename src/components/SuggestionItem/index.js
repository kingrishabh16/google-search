import './index.css'

const SuggestionItem = props => {
  const {suggestionDetail, searchSuggestion} = props

  const {suggestion} = suggestionDetail

  const onsearchSuggestion = () => {
    searchSuggestion(suggestion)
  }

  return (
    <li>
      <div className="suggestionList">
        <p className="suggestionItem">{suggestion}</p>
        <button type="button" className="button" onClick={onsearchSuggestion}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
