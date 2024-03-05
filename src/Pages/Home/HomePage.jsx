import './HomePage.css';

function HomePage() {
  const featuredProducts = [
    { id: 1, name: 'Monstera Deliciosa', image: 'src/assets/monstera.webp' },
    { id: 2, name: 'Snake Plant', image: 'src/assets/snake-plant.avif' },
    { id: 3, name: 'Aloe Vera', image: 'src/assets/aloe-plant.jpg' },
    { id: 3, name: 'Spider Plant', image: 'src/assets/spider-plant.webp' }
  ];
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
          <div className="featured-products">
            {featuredProducts.map(product => (
              <div key={product.id} className="featured-product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="category">
          <h2>Shop by Category</h2>

          <div className="categories">
            <div className="indoor">
          <span>indoor plants</span>
          <img src="src/assets/indoor.avif" alt="" />
          </div>

          <div className="outdoor">
          <span>outdoor plants</span>
          <img src="src/assets/outdoor.png" alt="" />
          </div>

          <div className="water">
          <span>water plants</span>
          <img src="src/assets/water.png" alt="" />
          </div>

          <div className="pet">
          <span>pet safe plants</span>
          <img src="src/assets/pet.webp" alt="" />
          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
