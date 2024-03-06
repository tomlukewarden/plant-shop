import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Shop from '../Shop/Shop'
import Profile from '../Profile/Profile'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
import FeaturedProducts from './Components/FeaturedProducts';
import ShopByCategory from './Components/ShopByCategory';
import './HomePage.css';

function HomePage() {

  return (
    <Router>
    <>
      <header className="header">
        <div className="login">
          <img className='basket' src="src/assets/cart.png" alt="shopping cart" width='50px'  />
          <button className="login-btn">Login</button>
          <button className="sign-up-btn">Sign up</button>
        </div>

        <div className="logo">
          <img src="src/assets/monstera-plant.jpg" alt="Logo" className="logo-img" width="200px" />
          <h1>Plant Shop</h1>
        </div>

        <nav className="nav-bar">
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/contact'>Contact Us</Link>
        </nav>
      </header>

      <section className="home-shop">
        <FeaturedProducts/>
        <ShopByCategory/>
        </section>
        
      <main>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/contact' element={<ContactUs/>}></Route>
        </Routes>
      </main>
    </>
    </Router>
  );
}

export default HomePage;
