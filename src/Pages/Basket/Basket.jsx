import './Basket.css'
import PropTypes from 'prop-types';

function Basket({ items, onUpdateQuantity, onRemoveItem, onOrder }) {
  const getTotalPrice = () => items.reduce((total, item) => total + item.price * item.quantity, 0);
  const getTotalQuantity = () => items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="basket-container">
      <div className="basket-content">
        <h1 className="basket-heading">Shopping Basket</h1>
        <div className="basket-items">
          {items.map(item => (
            <div key={item.id} className="basket-item">
              <div className="item-details">
                <h2 className="item-name">{item.name}</h2>
                <p className="item-price">Price: £{item.price}</p>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <p className="item-quantity">{item.quantity}</p>
                  <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
              <div className="item-total">
                <p className="total-price">Total: £{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <h2 className="total-price">Total Price: £{getTotalPrice().toFixed(2)}</h2>
          <p>Total Quantity: {getTotalQuantity()}</p>
          <button className="checkout-btn" onClick={onOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

Basket.propTypes = {
  items: PropTypes.array.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onOrder: PropTypes.func.isRequired,
};

export default Basket;
