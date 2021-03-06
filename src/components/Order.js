import React from 'react';
import './Order.css';
import moment from 'moment';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className="order__id">
        <small>
          <b>Your Order Id:</b> {order.id}
        </small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideBtn
          hideRating
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">
            Order Total: <strong>{value}</strong>
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
