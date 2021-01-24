import { Link } from '@material-ui/core';
import React from 'react'
import "./style.css";


const sidebar = () => {
    return (
        <div>
            <div className="sideBarStyle mt-5 pt-5">
             <ul>
                 <Link to="/user-list"><li>User</li></Link>
                 <Link to="/horse-list"><li>Horse</li></Link>
                <Link><li>Trailer</li></Link>
             </ul>
            </div>   
        </div>
    )
}

export default sidebar
