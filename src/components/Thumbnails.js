import React from 'react';

const Thumbnails = ({ img, name, category }) => {

    return (
            <div className="h-80 max-h-full max-w-md mx-auto my-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl ">
                <img src={img} alt=""/>
                <h3 className="p-2 text-xl font-black leading-6 capitalize">{name}</h3>
                <p className="p-2 mx-2 font-sans text-xs uppercase text-red-300 border-t border-dotted "><span className="font-semibold">category:</span> {category}</p>
        </div>
    )
}

export default Thumbnails
