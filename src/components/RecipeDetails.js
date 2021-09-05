import React, { useState, useEffect } from 'react';

const RecipeDetails = ({ match }) => {

    const [recipe, setRecipe] = useState({})

    const getRecipe = async () => {
        const url = `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${match.params.id}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            // console.log(result.meals)
            console.log(result.meals[0])

            setRecipe(result.meals[0]) 

        }
        catch (err) {
        setRecipe('No results found')
        // alert("Please fill the form");
        }
    }
    
    useEffect(() => {
        getRecipe();
        console.log(match)
    }, []);


    return (
        <div>
            <h2>Hello are you linked here?</h2>
            
            <h2>{recipe.strMeal}</h2>
            <p>{recipe.strInstructions}</p>
        </div>
    )
}

export default RecipeDetails
