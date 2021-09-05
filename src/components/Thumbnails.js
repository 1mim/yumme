import React from 'react';

const Thumbnails = ({ img, name, category }) => {

    return (
            <div className="max-w-md mx-auto max-h-full bg-white rounded-xl overflow-hidden md:max-w-xl hover:shadow-xl">
                <img src={img} alt=""/>
                <h3 className="p-2 text-xl font-black leading-6 capitalize">{name}</h3>
                <p className="p-2 mx-2 font-sans text-xs uppercase text-red-300 border-t border-dotted "><span className="font-semibold">category:</span> {category}</p>
        </div>
    )
}

export default Thumbnails
