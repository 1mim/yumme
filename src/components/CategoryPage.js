import React, { useState, useEffect } from 'react';
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom';
import Category from './Category';

import { Ripple } from 'react-spinners-css';

const CategoryPage = ({ match }) => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const getCategory = async () => {
        setError(null);
        setLoading(true);
        const url = `https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${match.params.name}`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            // console.log(result.meals)
            console.log(result.meals)

            setCategories(result.meals)
            console.log(result.meals.strCategory)

        }
        catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        getCategory();
        console.log(match)
    }, []);

    return (
        <div className="mt-16">
            
            <h2 className="m-3">{match.params.name}</h2>
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
            <div className="inline-grid grid-cols-4 gap-x-10 gap-y-10 m-32 mb-8 mt-8">
                {categories !== [] &&
                    categories.map(category =>
                      
                        <Link to={`/recipe/${category.idMeal}`}>
                         <Thumbnails
                            key={category.idMeal}
                            img={category.strMealThumb}
                            name={category.strMeal}/>
                        </Link>
                    )} 
            </div>
        </div>
    )
}

export default CategoryPage
