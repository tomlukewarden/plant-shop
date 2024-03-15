import '../Shop.css'
import PropTypes from 'prop-types';

function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      {plants.map(plant => (
        <div key={plant.id} className="plant">
          <h2>{plant.name}</h2>
          <p>Category: {plant.category}</p>
          <p>Price: £{plant.price}</p>
          <button className='add-to-basket'  onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

PlantList.propTypes = {
  plants: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default PlantList;
