import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { SubmitSearchBar } from '../../../../store/action';
import routes from '../../../../constants/routes';

import './SearchBar.scss';

const SearchBar : FC<SearchBarProps>  = ({input, setInput}: SearchBarProps) => {
  const className = 'search-bar';
  const history = useHistory();
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && input.length !== 0) {
      SubmitSearchBar(input);
      setInput("");
      history.push(routes.search);
    }
  };
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

interface SearchBarProps {
  input: string;
  setInput: (x: string) => void;
}

export default SearchBar