import React from 'react'
import cube from '../assets/Images/the_cube.webp'

function Productimages( props ) {
    const {imageName} = props;
    if (imageName == 'cube') {
        return <img src= {cube} alt= 'The Cube' className='productImage'/>
    }
}

export default Productimages