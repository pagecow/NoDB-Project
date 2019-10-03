import React from 'react';
import {Link} from "react-router-dom";

class HeaderLoggedIn extends React.Component {
    render(){
        return(
                <header>
                    <Link to="/LoggedInHome"><button class="logo">PageCOW</button></Link>        
                    <div class="topnav">
                        <Link to="/ProfilePage"><button class="profile-button">Profile</button></Link>
                        <Link to="/"><button class="log-in-button">Sign Out</button></Link>
                    </div>
                </header>
        )
    }
}

export default HeaderLoggedIn