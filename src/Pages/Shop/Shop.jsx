import { useState } from 'react';
import PlantList from './components/PlantList';
import Basket from '../Basket/Basket';
import Order from './components/Order';
import './Shop.css';

function Shop() {
  const [cart, setCart] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // State to track if order is placed

  const addToCart = (plant) => {
    const itemInCart = cart.find(item => item.id === plant.id);

    if (itemInCart) {
      const updatedCart = cart.map(item => (item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item));
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...plant, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = newQuantity === 0 ? cart.filter(item => item.id !== itemId) : cart.map(item => (item.id === itemId ? { ...item, quantity: newQuantity } : item));
    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleOrder = () => {
    setIsOrderPlaced(true);
  };

  const calculateTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const plants = [
    { id: 1, name: 'Monstera Deliciosa', category: 'indoor', price: 25 },
    { id: 2, name: 'Snake Plant', category: 'indoor', price: 15 },
    { id: 3, name: 'Aloe Vera', category: 'indoor', price: 20 },
    { id: 4, name: 'Fern', category: 'outdoor', price: 18 },
    { id: 5, name: 'Lavender', category: 'outdoor', price: 12 },
    { id: 6, name: 'Rosemary', category: 'outdoor', price: 15 },
  ];

  const filteredPlants = plants.filter(plant => (selectedCategory === 'all' ? plant.name.toLowerCase().includes(searchTerm.toLowerCase()) : plant.name.toLowerCase().includes(searchTerm.toLowerCase()) && plant.category === selectedCategory));

  return (
    <div className="shop-page">
      {!isOrderPlaced ? (
        <>
          <div className="plant-list-container">
            <h1>Shop</h1>
            <div className="filters">
              <input
                type="text"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="indoor">Indoor Plants</option>
                <option value="outdoor">Outdoor Plants</option>
                <option value="water">Water Plants</option>
                <option value="pet-safe">Pet Safe Plants</option>
              </select>
            </div>
            <PlantList plants={filteredPlants} addToCart={addToCart} />
          </div>
          <div className="basket-container">
            <Basket items={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} onOrder={handleOrder} />
          </div>
        </>
      ) : (
        <Order items={cart} totalPrice={calculateTotalPrice()} onOrder={handleOrder} />
      )}
    </div>
  );
}

export default Shop;
