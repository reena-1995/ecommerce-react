import { Link } from 'react-router-dom';
import React from 'react'
import "./style.css";


const sidebar = () => {
    return (
        <div>
            <div className="sideBarStyle mt-5 pt-5">
             <ul>
                 <Link to="/user-list"><li>User</li></Link>
                 <Link to="/horse-list"><li>Horse</li></Link>
                 <Link to="/trailer-list"><li>Trailer</li></Link>
             </ul>
            </div>   
        </div>
    )
}

export default sidebar
