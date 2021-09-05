import React from 'react'
import { Circle, Heart, Ripple } from 'react-spinners-css';


const Loading = () => {
    return (
        <div className="w-full h-full bg-red-50 bg-opacity-25 text-center">
            <Ripple color="#EED7C5" size={100} />
        </div>
    )
}

export default Loading
