import { useState } from 'react';
import PropTypes from 'prop-types';

function Order({ items, totalPrice, onOrder }) {
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleOrder = () => {
    if (deliveryAddress.trim() === '') {
      alert('Please fill in the delivery address.');
      return;
    }
  
    const orderDetails = {
      deliveryAddress,
      items,
      totalPrice,
    };
    onOrder(orderDetails);
    alert('Thank you for your order!');
  };

  return (
    <div className="order-page">
      <h1>Order Details</h1>
      <div className="input-group">
        <label htmlFor="delivery-address">Delivery Address:</label>
        <input
          id="delivery-address"
          type="text"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
      </div>
      <div className="basket-items">
        <h2>Basket Items:</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: £{item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="total-price">
        <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
      </div>
      <button className="checkout-btn" onClick={handleOrder}>Place Order</button>
    </div>
  );
}

Order.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
  onOrder: PropTypes.func.isRequired, 
};

export default Order;
