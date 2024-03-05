import './Login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
  // add authentication/validation here

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="login-page">
      <section className="login-section">
        <h2>Login</h2>
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
          <button type="submit" className="login-btn">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
