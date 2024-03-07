import './Profile.css';

function Profile() {
  // Dummy user data
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    currentOrders: [
      { id: 1, product: "Plant Pot", quantity: 2 },
      { id: 2, product: "Succulent Plant", quantity: 1 }
    ],
    pastOrders: [
      { id: 3, product: "Monstera Plant", quantity: 1 },
      { id: 4, product: "Fiddle Leaf Fig", quantity: 3 }
    ]
  };

  return (
    <main className="profile-page">
      <section className="profile-section">
        <h2>Profile Information</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      </section>

      <section className="orders-section">
        <div className="current-orders">
          <h2>Current Orders</h2>
          <ul>
            {userData.currentOrders.map(order => (
              <li key={order.id}>{order.quantity} x {order.product}</li>
            ))}
          </ul>
        </div>
        
        <div className="past-orders">
          <h2>Past Orders</h2>
          <ul>
            {userData.pastOrders.map(order => (
              <li key={order.id}>{order.quantity} x {order.product}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Profile;
