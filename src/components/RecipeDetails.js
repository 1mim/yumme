import React, { useState, useEffect } from 'react';

const RecipeDetails = ({ match }) => {
    
    useEffect(() => {
        getRecipe();
        console.log(match)
    }, []);

    const [recipe, setRecipe] = useState([])

    const getRecipe = async () => {
        const url = `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${match.meals.idMeal}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            // console.log(result.meals)

            setRecipe(result.meals) 

        }
        catch (err) {
        setRecipe('No results found')
        // alert("Please fill the form");
        }
    }
    


    return (
        <div>
            <p>{recipe.strInstructions}</p>
        </div>
    )
}

export default RecipeDetails
