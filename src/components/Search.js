import React, { useState } from 'react'
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom';

// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Circle, Heart, Ripple } from 'react-spinners-css';

const Search = () => {

    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getRecipe = async () => {
        
        setError(null);
        setLoading(true);

        const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();
            
            setError('No results found');

            // console.log(result.meals)

            setRecipes(result.meals) 

        }
        catch (err) {
            console.error(err.message)
        }
        setLoading(false)
      }
    

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getRecipe()
        setInput("")    
        // return <h2>results</h2> 

    }
    

    return (
        <div className="App mt-16">
            <h2 className="text-6xl pt-10 pb-5">Our Recipes</h2>
            <form onSubmit={handleSubmit}>
                    {/* <input className="w-1/2 h-14 m-7 p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-transparent" */}
                    <input className="w-1/3 h-14 m-7 p-4 bg-transparent border-b-2 border-gray-500 focus-within:text-gray-600 outline-none "
                    type='text' value={input} placeholder='Search Recipes' onChange={handleChange}></input>
            </form>
            {/* {!loading && error && <h2>{error}</h2>} */}

            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
            {recipes.length} results found
            <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mt-8 ">       
                {recipes !== [] &&
                    recipes.map(recipe =>
                        
                        <Link to={`/recipe/${recipe.idMeal}`}>
                        <Thumbnails
                            key={recipe.idMeal}
                            img={recipe.strMealThumb}
                            name={recipe.strMeal}
                                category={recipe.strCategory} />
                        </Link>
                    )} 
            </div>

        </div>
    )
}

export default Search