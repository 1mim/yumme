import React from 'react';
import Category from './Category';
import CategoryPage from './CategoryPage';

const CategoryTab = ({ match }) => {
    return (
        <div>
            <div className="bg-gray-600 w-full h-full pt-10 pb-10 bg-cover bg-fixed" style={{backgroundImage:`url('https://i.ibb.co/Zgj3KQh/sign-up-news-letter-banner.jpg')`}}><Category /></div>
            <div className="pb-10"><CategoryPage match={match} /></div>
        </div>
    )
}

export default CategoryTab
