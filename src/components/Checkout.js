import React from 'react';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

function Checkout() {
  const [{ user, basket }] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click "Add to Basket" next
              to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {user && basket.length ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : (
        !user && (
          <div className="checkout__right">
            <div className="checkout__rightLogIn">
              <p>
                You are not Logged In. <br />
                Sign In or Create New Account to make an order.
              </p>
              <button onClick={(e) => navigate('/login')}>Proceed to Log In</button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Checkout;
