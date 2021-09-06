import React, { useEffect, useState } from 'react';
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom'

const LatestPage = () => {
    const [recipes, setRecipes] = useState([])

    const featRecipe = async() => {
        const url = `https://www.themealdb.com/api/json/v2/9973533/latest.php`;
       
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
        <div className="mt-16">
            <h2 className="text-5xl pt-10 pb-12">Latest Recipes</h2>
            {/* <h2>results</h2> */}
            <div className="flex flex-wrap flex-col inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mb-16 mt-8">
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

export default LatestPage
