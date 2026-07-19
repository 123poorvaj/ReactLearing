import React from 'react'
import { Link } from 'react-router-dom';
import './NovBar.css'
function NavBar() {
    return (
        <>
            <div className="novbar">
                <ul className="navitemCotainer">
                    <li className="items"><Link to='/Home' >Home</Link> </li>
                    <li className="items"><Link to='/Login'>Login</Link> </li>
                    <li className="items"><Link to='/Contact'>Contact</Link> </li>
                </ul>
            </div>

        </>
    );

}

export default NavBar