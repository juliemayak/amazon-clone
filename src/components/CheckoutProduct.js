import React from 'react';
import { Rating } from '@mui/material';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, price, rating, image, hideBtn, hideRating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="checkout-product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideRating && (
          <div className="checkoutProduct__rating">
            <Rating className="test" name="simple-controlled" value={rating} precision={0.1} />
          </div>
        )}

        {!hideBtn && <button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
