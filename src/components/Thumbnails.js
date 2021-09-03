import React from 'react'

const Thumbnails = ({ img, name, cuisine }) => {


    return (
        <div className="recipes-display">
            <article className='recipe-thumbnail'>
                <img src={img} alt="" style={{maxWidth:'75%'}}/>

                <h3>{name}</h3>
                <h8>cuisine: {cuisine}</h8>

            </article>
            
        </div>
    )
}

export default Thumbnails
