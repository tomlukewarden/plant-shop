import { useState } from 'react';
import PlantList from './components/PlantList';
import Basket from '../Basket/Basket';
import './Shop.css';

function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemInCart = cart.find(item => item.id === plant.id);

    if (itemInCart) {
      const updatedCart = cart.map(item => {
        if (item.id === plant.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...plant, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      const updatedCart = cart.filter(item => item.id !== itemId);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

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

  const filteredPlants = plants.filter(plant => {
    if (selectedCategory === 'all') {
      return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return plant.name.toLowerCase().includes(searchTerm.toLowerCase()) && plant.category === selectedCategory;
    }
  });

  return (
    <div className="shop-page">
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
     
        <Basket items={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
      </div>
    </div>
  );
}

export default Shop;
