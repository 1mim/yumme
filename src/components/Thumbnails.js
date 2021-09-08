import React from 'react';

const Thumbnails = ({ img, name, category, cuisine }) => {

    return (
            // <div className="max-w-md mx-auto auto-rows-auto flex-wrap flex-col items-stretch inline-flex bg-white rounded-xl overflow-hidden md:max-w-xl hover:shadow-lg">
            <div className="h-full max-w-md mx-auto auto-rows-auto bg-white rounded-xl overflow-hidden md:max-w-xl hover:shadow-lg">
            <img className="" src={img} alt="" />
            
            <div className="items-center">
            <div class="flex-1 items-end grid grid-cols-2 p-2 mx-2 divide-x divide-red-300 text-xs font-sans text-gray-500 border-b border-red-300 border-dotted">
                <p>{category}</p>
                <p>{cuisine}</p>
                </div>
            <h3 className="flex-1 items-center p-2 mb-2 text-xl font-black leading-6 capitalize">{name}</h3>

                
            </div>
        </div>
    )
}

export default Thumbnails
