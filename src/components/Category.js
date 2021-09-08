import React, { useEffect, useState } from 'react';
import Thumbnails from './Thumbnails';
import { Link } from 'react-router-dom';

import { Ripple } from 'react-spinners-css';

const Category = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const getCategory = async () => {
        setError(null);
        setLoading(true);

        const url = `https://www.themealdb.com/api/json/v2/9973533/list.php?c=list`;
       
        try {
            console.log("search");
            let result = await fetch(url);
            result = await result.json();

            // console.log(result.meals)

            setCategories(result.meals) 

        }
        catch (err) {
          setError(err.message
            )
        // alert("Please fill the form");
        }
        setLoading(false)
    }
    
    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div className="bg-white shadow-2xl grid grid-cols-3 gap-4 w-2/3 p-3 h-38 mx-auto rounded-lg align-middle">
            <div>
            <h2 className="border-r-2 border-red-350 min-h-full leading-9 pt-6">Browse by category</h2>
            </div>
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
            <div className="col-span-2 h-full my-2">

            {categories !== [] &&
                    categories.map(category =>
                      
                        <span className="flex-auto bg-red-350 font-semibold text-gray-600 hover:bg-red-550 hover:shadow hover:text-white m-2 py-2 px-5 text-white text-xs text-left font-sans leading-10 rounded-full">
                            <Link to={`/category/${category.strCategory}`}>
                         {/* <Thumbnails
                            // key={recipe.idMeal}
                            // img={recipe.strMealThumb}
                            // name={recipe.strMeal}
                            category={category.strCategory}
                                // cuisine={recipe.strArea} */}
                                
                            {/* /> */}
                            {category.strCategory}
                    </Link> </span>
                    )} 
            </div>

            
        </div>
    )
}

export default Category
