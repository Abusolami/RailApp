import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
            <div className="nav-bar">
                <div>
                  Logo
                </div>
            
                <div className="nav-links-bar">
                    <div className="nav-links"> <Link to="/Userprofile">
                    User Profile
                         </Link>
                     </div>
            
                     <div className="nav-links"> <Link to="/Aboutus">
                        About Us
                        </Link>
                    </div>
            </div>
        </div>

        
    )
}

export default Navbar;
