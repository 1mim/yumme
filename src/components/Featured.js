import React, { useEffect, useState } from 'react';
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom'

const Featured = () => {
    const [recipes, setRecipes] = useState([])

    const featRecipe = async() => {
        const url = `https://www.themealdb.com/api/json/v2/9973533/randomselection.php`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            // console.log(result.meals)

            setRecipes(result.meals) 

        }
        catch (err) {
        setRecipes('No results found')
        // alert("Please fill the form");
        }
    }
    
    useEffect(() => {
        featRecipe();
    }, []);

    return (
        <div>
            <h2 className="m-3">Featured Recipes</h2>
            {/* <h2>results</h2> */}
            <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mb-8 mt-8">
                {recipes !== [] &&
                    recipes.map(recipe =>
                      
                        <Link to={`/recipe/${recipe.idMeal}`}>
                         <Thumbnails
                            key={recipe.idMeal}
                            img={recipe.strMealThumb}
                            name={recipe.strMeal}
                            category={recipe.strCategory} />
                        </Link>
                    ).slice(6)} 
            </div>
            <div className="my-10 mt-5">
                <buton className="box-border border-black h-32 w-40 p-4 border-2 hover:border-red-300 ">View more</buton>
            </div>
        </div>
    )
}

export default Featured
