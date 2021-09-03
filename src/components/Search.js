import React, { useState } from 'react'
import Thumbnails from './Thumbnails';

const Search = () => {

    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([])

    const getRecipe = async() => {
        const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
       
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
        <div className="App">
            <form onSubmit={handleSubmit}>
                
                    <input className="w-1/2 h-14 m-7 p-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-transparent"
                        type='text' value={input} placeholder='Search Recipes' onChange={handleChange}></input>
            </form>
            {/* <h2>results</h2> */}
            <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mt-8">
                {recipes !== [] &&
                    recipes.map(recipe => 
                        <Thumbnails
                            key={recipe.idMeal}
                            img={recipe.strMealThumb}
                            name={recipe.strMeal}
                            category={recipe.strCategory} />
                    )} 
            </div>
        </div>
    )
}

export default Search