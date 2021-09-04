import React from 'react'

const Thumbnails = ({ img, name, category }) => {


    return (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl ">
                <img src={img} alt=""/>

                <h3 className="p-2 text-xl font-black leading-6 ">{name}</h3>
            <p className="p-2 static bottom-0 font-sans text-xs uppercase text-red-300"><span className="font-semibold">category:</span> {category}</p>

            
        </div>
    )
}

export default Thumbnails
