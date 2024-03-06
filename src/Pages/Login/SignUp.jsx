import './Login.css';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
    // Add authentication/validation logic here

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="login-page">
      <section className="login-section">
        <h2>Sign Up</h2>
        <p>Already have an account? <a href="/login">Login Here</a></p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-page-btn">Sign Up</button>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
