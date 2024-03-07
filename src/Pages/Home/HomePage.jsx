import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Shop from '../Shop/Shop';
import Profile from '../Profile/Profile';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import FeaturedProducts from './Components/FeaturedProducts';
import ShopByCategory from './Components/ShopByCategory';
import Login from '../Login/Login'
import SignUp from '../Login/SignUp';
import './HomePage.css';

function HomePage() {
  const location = useLocation();

  return (
      <>
        <header className="header">
          <div className="login">
            <Link to='/login'><button className="login-btn">Login</button></Link>
            <Link to='/signup'><button className="sign-up-btn">Sign up</button></Link>
          </div>

          <div className="logo">
            <Link to='/'><img src="src/assets/monstera-plant.jpg" alt="Logo" className="logo-img" width="200px" /></Link>
            <h1>Plant Shop</h1>
          </div>

          <nav className="nav-bar">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/shop' className="nav-link">Shop</Link>
            <Link to='/about' className="nav-link">About Us</Link>
            <Link to='/profile' className="nav-link">Profile</Link>
            <Link to='/contact' className="nav-link">Contact Us</Link>
          </nav>
        </header>

        <main>
          {location.pathname === '/' && (
            <section className='home-shop'>
              <FeaturedProducts/>
              <ShopByCategory/>
            </section>
          )}

          <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contact' element={<ContactUs/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
        </main>
      </>
  );
}

export default HomePage;
