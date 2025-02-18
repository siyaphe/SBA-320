import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Mealitem from './Mealitem';

export default function Meals() {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const params = useParams();
  const symbol = params.symbol;

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='main'>
      <div className='heading'>
        <h1>Discover Delicious Recipes</h1>
        <h4>Explore a World of Culinary Delights</h4>
      </div>
      <div className='searchBox'>
        <input 
          type='search' 
          className='search-bar' 
          placeholder='Enter food name' 
          onChange={handleSearch} 
          value={search} 
        />
      </div>
      <div className='container'>
        {meals.length === 0 ? <p>No meals found</p> : 
          meals.map((meal) => (
            <Mealitem key={meal.idMeal} data={meal} />
          ))
        }
      </div>
    </div>
  );
}