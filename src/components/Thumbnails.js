import React from 'react'

const Thumbnails = ({ img, name, cuisine }) => {


    return (
        <div className="inline-grid grid-flow-col auto-cols-max grid-cols-4 gap-x-4 gap-y-4">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
                <img src={img} alt=""/>

                <h3>{name}</h3>
                <p>cuisine: {cuisine}</p>

            </div>
            
        </div>
    )
}

export default Thumbnails
