function ShopByCategory(){
  return(
    <>
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
    </>
  )
}

export default ShopByCategory