import './Profile.css';

function Profile() {
  const userData = {
    name: "",
    email: "",
    currentOrders: [],
    pastOrders: []
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