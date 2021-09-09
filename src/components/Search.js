import React, { useState } from 'react'
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom';


import { Ripple } from 'react-spinners-css';

const Search = () => {

    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState('');
    // const [total, setTotal] = useState('');

    const getRecipe = async () => {
        
        setError(null);
        setLoading(true);

        const url = `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${input}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();
            
            if (result.meals === null) {
                setRecipes([])
                setNoResults("No results found")
            } else {

            setRecipes(result.meals)
            console.log(result.meals)
            }   

            console.log(recipes);
            console.log('no results here', error);
            console.log(noResults);
            setNoResults();


        } catch (err) {
            // console.log("error at catch")

            await setError(err.message)
            
        }
        
        setLoading(false)
      }
    

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getRecipe()
        setInput("")
        // setTotal(recipes.length)
    }
    
    

    return (
        <div className="mt-16 h-full">
            <h2 className="text-6xl pt-10 pb-14">yumme recipes</h2>
            <form onSubmit={handleSubmit}>

                    <input className="w-1/3 h-14 m-7 p-4 bg-transparent border-b-2 border-gray-500 focus-within:text-gray-600 outline-none "
                    type='text' value={input} placeholder='a search away' onChange={handleChange}></input>
            </form>

            {error && recipes.length === 0 && <h2>{noResults}</h2>}
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
    
            {!loading && (
                <div>
                    {/* <p>{total}</p> */}
                    <div>{recipes.length} results found</div>
                <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mt-8">
                    {recipes !== [] &&
                        recipes.map(recipe =>
                        
                            <Link to={`/recipe/${recipe.idMeal}`}>
                                <Thumbnails
                                    key={recipe.idMeal}
                                    img={recipe.strMealThumb}
                                    name={recipe.strMeal}
                                    category={recipe.strCategory}
                                    cuisine={recipe.strArea} />
                            </Link>
                        )}
                    </div>

                </div>)}

        </div>
    )
}

export default Search