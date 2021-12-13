import React from 'react';
import Product from './Product';
import { useStateValue } from '../StateProvider';

import './SearchResults.css';

function SearchResults() {
  const [{ searchResults, searchValue }] = useStateValue();

  return (
    <div className="results">
      <div className="results__counter">
        <span>{`${searchResults.length} ${
          searchResults.length === 1 ? 'result' : 'results'
        } for`}</span>
        <span className="results__value"> {`"${searchValue}"`}</span>
      </div>
      <div className="results__products">
        {searchResults.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              className="results_product"
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;
