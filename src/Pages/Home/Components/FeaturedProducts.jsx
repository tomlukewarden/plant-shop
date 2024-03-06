
function FeaturedProducts (){
  const featuredProducts = [
    { id: 1, name: 'Monstera Deliciosa', image: 'src/assets/monstera.webp' },
    { id: 2, name: 'Snake Plant', image: 'src/assets/snake-plant.avif' },
    { id: 3, name: 'Aloe Vera', image: 'src/assets/aloe-plant.jpg' },
    { id: 3, name: 'Spider Plant', image: 'src/assets/spider-plant.webp' }
  ];
  return (
    <>
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
        </section></>
  )
}

export default FeaturedProducts