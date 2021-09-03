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
        return (<p>No results found.
                Try browsing our latest collection.</p>)
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
                
                    <input className="border border-transparent rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
                        type='text' value={input} placeholder='Search Recipes' onChange={handleChange}></input>
            </form>
            {/* <h2>results</h2> */}
            <div className='recipes-display'>
                {recipes !== [] &&
                    recipes.map(recipe => 
                        <Thumbnails
                            key={recipe.idMeal}
                            img={recipe.strMealThumb}
                            name={recipe.strMeal}
                            cuisine={recipe.strArea} />
                    )}
            </div>
        </div>
    )
}

export default Search