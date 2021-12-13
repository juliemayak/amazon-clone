import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../customHooks/useDebounce';
import useOutsideClick from '../customHooks/useClickOutside';
import { useStateValue } from '../StateProvider';
import './SearchBar.css';

function SearchBar({ data, className }) {
  let { id } = useParams();

  //using global state
  const [{ searchResults, searchValue }, dispatch] = useStateValue();
  //controlling api requests' frequency
  const debouncedSearchValue = useDebounce(searchValue, 700);
  //toggling searchResults display
  const [resultsVisible, setResultsVisible] = useState(false);

  //function to change global state
  const addToSearchResults = (searchedItems) => {
    dispatch({
      type: 'ADD_TO_SEARCH_RESULTS',
      searchedItems
    });
  };
  const setInputValue = (input) => {
    dispatch({
      type: 'SET_INPUT',
      input
    });
  };

  //click outside logic
  const ref = useRef();
  useOutsideClick(ref, () => {
    setResultsVisible(false);
  });

  useEffect(() => {
    let searchedItems;
    if (debouncedSearchValue?.trim() !== '') {
      searchedItems = data.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearchValue?.trim().toLowerCase())
      );
      setResultsVisible(true);
      addToSearchResults(searchedItems);
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (id) {
      addToSearchResults([data.find((item) => item.id === id)]);
      setResultsVisible(false);
    }
  }, [id]);

  const renderedResults = searchResults?.map((result) => {
    return (
      <Link key={result.id} to={`/search-results/${result.id}`}>
        <div className="result">
          <div className="result__title">{result.title}</div>
        </div>
      </Link>
    );
  });

  return (
    <div className={`search ${className}`}>
      <input
        value={searchValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="search__input"
      />
      <Link to={`/search-results`}>
        <SearchIcon className="search__searchIcon" onClick={() => setResultsVisible(false)} />
      </Link>
      {resultsVisible && searchValue?.trim() && (
        <div ref={ref} className="search__results">
          {renderedResults}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
