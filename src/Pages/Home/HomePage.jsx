import './HomePage.css'

function HomePage() {
  return (
<>
<header>
<div className="login">
  <button className="login-bttn">login</button>
  <button className='sign-up-bttn'>sign up</button>
</div>

<div className='logo'> 
<img src='src/assets/monstera-plant.jpg' alt='' className='logo-img' width='200px' />
<h1>plant shop</h1>
</div>

<nav className='nav-bar'>
  <span>home</span>
  <span>shop</span>
  <span>about us</span>
  <span>account</span>
  <span>contact us</span>
</nav>

</header>


<main className='home-shop'>
<section className='featured'>featured</section>
<section className='category'>category</section>
</main>
    </>
  );
}

export default HomePage;
