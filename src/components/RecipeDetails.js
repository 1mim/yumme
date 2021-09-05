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
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getRecipe();
        console.log(match)
    }, []);


    return (

        <div className="grid grid-cols-2 grid-flow-col space-x-28 bg-fixed bg-no-repeat" style={{backgroundImage:`url(${recipe.strMealThumb})`}}>
           
            <div className="">
                {/* for Image */}
                {/* <img className="object-none object-left-top" src={recipe.strMealThumb} alt={recipe.strMeal} /> */}
            </div>
            <div className="text-left pr-24 mt-32 mb-16">
                <h2 className="capitalize text-5xl leading-tight">{recipe.strMeal}</h2>
                <br/>
                <div class="grid grid-cols-2 divide-x divide-red-300 w-48 text-xs font-sans">
                    <div>
                        <ul>
                            <li className="font-bold">Category</li>
                            <li>{recipe.strCategory}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="pl-6">
                            <li className="font-bold">Cuisine</li>
                            <li>{recipe.strArea}</li>
                        </ul>
                    </div>
                   
                </div>
                
                <br />
                <p className="text-sm font-sans font-bold text-pink">Ingredients</p>
                <ul className="text-sm font-sans pr-24 list-none leading-6">
                    <li>{recipe.strMeasure1} {recipe.strIngredient1}</li>
                    <li>{recipe.strMeasure2} {recipe.strIngredient2}</li>
                    <li>{recipe.strMeasure3} {recipe.strIngredient3}</li>
                    <li>{recipe.strMeasure4} {recipe.strIngredient4}</li>
                    <li>{recipe.strMeasure5} {recipe.strIngredient5}</li>
                    <li>{recipe.strMeasure6} {recipe.strIngredient6}</li>
                    <li>{recipe.strMeasure7} {recipe.strIngredient7}</li>
                    <li>{recipe.strMeasure8} {recipe.strIngredient8}</li>
                    <li>{recipe.strMeasure9} {recipe.strIngredient9}</li>
                    <li>{recipe.strMeasure10} {recipe.strIngredient10}</li>
                    <li>{recipe.strMeasure11} {recipe.strIngredient11}</li>
                    <li>{recipe.strMeasure12} {recipe.strIngredient12}</li>
                    <li>{recipe.strMeasure13} {recipe.strIngredient13}</li>
                    <li>{recipe.strMeasure14} {recipe.strIngredient14}</li>
                    <li>{recipe.strMeasure15} {recipe.strIngredient15}</li>
                    <li>{recipe.strMeasure16} {recipe.strIngredient16}</li>
                    <li>{recipe.strMeasure17} {recipe.strIngredient17}</li>
                    <li>{recipe.strMeasure18} {recipe.strIngredient18}</li>
                    <li>{recipe.strMeasure19} {recipe.strIngredient19}</li>
                    <li>{recipe.strMeasure20} {recipe.strIngredient20}</li>

                </ul>
                
                <br />
                <p className="text-sm font-sans font-bold text-pink">Intructions</p>
                <p className="text-sm font-sans">{recipe.strInstructions}</p>
                </div>
        </div>
    )
}

export default RecipeDetails
