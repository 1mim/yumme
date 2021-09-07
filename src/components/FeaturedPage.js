import React, { useEffect, useState } from 'react';
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom';

import { Ripple } from 'react-spinners-css';

const FeaturedPage = () => {
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
        <div className="mt-16 flex flex-col">
           
            <h2 className="text-5xl pt-10 pb-12">Featured Recipes</h2>
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
            <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mb-16 mt-8">
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
                    )} 
            </div>
        </div>
    )
}

export default FeaturedPage
