import { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
      
        const response = await fetch('http://localhost:3030/users/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData()
  }, []);

  if (error) {
    return <p className="error-message">{error}</p>; 
  }

  if (!userData) {
    return <p>Loading...</p>;
  }

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
