import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar( props ) {
    const {name, path} = props;

    if (window.location.href != 'http://localhost:5173/'){
      return (
        <div className= 'sideBar' >
            <p>
                <Link className='genericLink' to= '/'>Home</Link>/<Link className='genericLink' to= {path}>{name}</Link>
            </p>
        </div>
      )
    }
}

export default Sidebar