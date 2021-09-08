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
        <div className="bg-white">
            <h2>Browse by category</h2>
            {loading && <div className="center"><Ripple color="#EED7C5" size={80} /></div>}
            <React.Fragment>

            {categories !== [] &&
                    categories.map(category =>
                      
                       <span> <Link to={`/category/${category.strCategory}`}>
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
            </React.Fragment>

            
        </div>
    )
}

export default Category
