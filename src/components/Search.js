import React, { useState } from 'react'

const Search = () => {

    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([])

    const getRecipe = async() => {
        const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            console.log(result.meals)

            // setRecipes(result.data) 

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
        getRecipe(input)
    }
    

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} placeholder='Search Recipes' onChange={handleChange}></input>
            </form>

            <h2>results</h2>

        </div>
    )
}

export default Search
