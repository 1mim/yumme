import React from 'react';

const Thumbnails = ({ img, name, category, cuisine }) => {

    return (
            <div className="max-w-md mx-auto auto-rows-auto bg-white rounded-xl overflow-hidden md:max-w-xl hover:shadow-xl">
                <img src={img} alt=""/>
                <h3 className="p-2 text-xl font-black leading-6 capitalize">{name}</h3>

            <div class="grid grid-cols-2 p-2 mx-2 divide-x divide-red-300 text-xs font-sans text-gray-500 border-t border-red-300 border-dotted">
                <p>{category}</p>
                <p>{cuisine}</p>
            </div>
        </div>
    )
}

export default Thumbnails
