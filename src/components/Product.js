import React from 'react';
import './Product.css';
import { Rating } from '@mui/material';
import { useStateValue } from '../StateProvider';

function Product({ id, title, price, rating, image, className }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    });
  };
  return (
    <div className={`product ${className}`}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Rating name="simple-controlled" value={rating} precision={0.1} />
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
