import React, { FC } from 'react'

const SearchBar : FC = () => {
    const className = "search-bar"
  return (
    <div className={className}>
        <div className={`${className}_input`}>
          <input
            className={`${className}_input_text`}
            type="text"
            value={input}
            onFocus={(e) => setInput("")}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </div>
  )
}

export default SearchBar