import React from 'react';
import Category from './Category';
import CategoryPage from './CategoryPage';

const CategoryTab = ({ match }) => {
    return (
        <div>
            <Category />
            <CategoryPage match={match} />
        </div>
    )
}

export default CategoryTab
