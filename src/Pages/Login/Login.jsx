import { useState } from 'react';
import './Login.css';


function Login() {
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch(`http://localhost:3030/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('User:', data);
      // Redirect upon successful login
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <main className="login-page">
      <section className="login-section">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <p>Not a customer yet? <a href="/signup">Sign Up Here</a></p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-page-btn">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
