import React, { useEffect, useState } from 'react';
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom';

import { Ripple } from 'react-spinners-css';

const Featured = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const featRecipe = async () => {
        setError(null);
        setLoading(true);

        const url = `https://www.themealdb.com/api/json/v2/9973533/randomselection.php`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            // console.log(result.meals)

            setRecipes(result.meals) 

        }
        catch (err) {
          setError(err.message
            )
        // alert("Please fill the form");
        }
        setLoading(false)
    }
    
    useEffect(() => {
        featRecipe();
    }, []);

    return (
        <div className="mt-10">
            <h2 className="m-3">Featured Recipes</h2>
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
        
            <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mb-8 mt-8 pb-6">
                {recipes !== [] &&
                    recipes.map(recipe =>
                      
                        <Link to={`/recipe/${recipe.idMeal}`}>
                         <Thumbnails
                            key={recipe.idMeal}
                            img={recipe.strMealThumb}
                            name={recipe.strMeal}
                            category={recipe.strCategory}
                            cuisine={recipe.strArea}/>
                        </Link>
                    ).slice(6)} 
            </div>
            <div className="my-10 mt-5">
            <Link to='/featured'><buton className = "py-4 px-8 font-bold bg-transparent border-2 border-gray-600 focus-within:text-gray-600 outline-none hover:bg-gray-600 hover:text-white"> View more </buton></Link>
            </div>
        </div>
    )
}

export default Featured
