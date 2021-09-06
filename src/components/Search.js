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
    // const [total, setTotal] = useState('');

    const getRecipe = async () => {
        
        setError(null);
        setLoading(true);

        const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();
            
            setRecipes(result.meals)

        }
        catch (err) {
            // console.error(err.message)

            setError(err.message);
            // setError(err.result.data.errors);
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
        // setTotal(recipes.length)


    }
    

    return (
        <div className="mt-16">
            <h2 className="text-6xl pt-10 pb-5">yumme recipes</h2>
            <form onSubmit={handleSubmit}>

                    <input className="w-1/3 h-14 m-7 p-4 bg-transparent border-b-2 border-gray-500 focus-within:text-gray-600 outline-none "
                    type='text' value={input} placeholder='a search away' onChange={handleChange}></input>
            </form>

            {error && <h2>{error[0]}</h2>}
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
    
            {!loading && (
                <div>
                    {/* <p>{total}</p> */}
                    <p>{recipes.length} results found</p>
                <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mt-8">
                    {recipes !== [] &&
                        recipes.map(recipe =>
                        
                            <Link to={`/recipe/${recipe.idMeal}`}>
                                <Thumbnails
                                    key={recipe.idMeal}
                                    img={recipe.strMealThumb}
                                    name={recipe.strMeal}
                                    category={recipe.strCategory}
                                    cuisine={recipe.strArea} />
                            </Link>
                        )}
                    </div>

                </div>)}

        </div>
    )
}

export default Search