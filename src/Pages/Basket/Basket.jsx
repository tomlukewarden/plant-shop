import './Basket.css';

function Basket() {
  const items = [
    { id: 1, name: 'Monstera Deliciosa', price: 25, quantity: 2 },
    { id: 2, name: 'Snake Plant', price: 15, quantity: 1 },
    { id: 3, name: 'Aloe Vera', price: 20, quantity: 3 },
  ];

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="basket-page">
      <h1>Shopping Basket</h1>
      <div className="basket-items">
        {items.map(item => (
          <div key={item.id} className="basket-item">
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: £{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="item-total">
              <p>Total: £{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total Price: £{getTotalPrice()}</h2>
        <button className="checkout-btn">Place Order</button>
      </div>
    </div>
  );
}

export default Basket;
