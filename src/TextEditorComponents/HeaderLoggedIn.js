import React from 'react';
import {Link} from "react-router-dom";

class HeaderLoggedIn extends React.Component {
    render(){
        return(
                <header>
                    <Link to="/"><button class="logo">PageCOW</button></Link>        
                    <div class="topnav">
                        <Link to="/"><button class="log-in-button">Sign Out</button></Link>
                        {/* <button class="sign-up-button">Sign Up</button> */}
                    </div>
                </header>
        )
    }
}

export default HeaderLoggedIn