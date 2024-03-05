import './HomePage.css';

function HomePage() {
  return (
    <>
      <header className="header">
        <div className="login">
          <button className="login-btn">Login</button>
          <button className="sign-up-btn">Sign up</button>
        </div>

        <div className="logo">
          <img src="src/assets/monstera-plant.jpg" alt="Logo" className="logo-img" width="200px" />
          <h1>Plant Shop</h1>
        </div>

        <nav className="nav-bar">
          <span>Home</span>
          <span>Shop</span>
          <span>About Us</span>
          <span>Account</span>
          <span>Contact Us</span>
        </nav>
      </header>

      <main className="home-shop">
        <section className="featured">
          <h2>Featured Products</h2>
          {/* add featured product items here later pls */}
        </section>
        <section className="category">
          <h2>Shop by Category</h2>
          {/* add category sections later pls */}
        </section>
      </main>
    </>
  );
}

export default HomePage;
