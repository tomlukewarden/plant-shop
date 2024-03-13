import './SignUp.css';
import { useState } from 'react';


function SignUp() {
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
    try {
      const response = await fetch(`http://localhost:3030/users/signup`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error); 
      }
  
      window.location.href = '/login';
    } catch (error) {
      setError(error.message || 'Sign up failed');
    }
  };

  return (
    <main className="signup-page">
      <section className="signup-section">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <p>Already have an account? <a href="/login">Login Here</a></p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signup-page-btn">Sign Up</button>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
