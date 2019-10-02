import React from 'react';
import {Link} from "react-router-dom";

class HomeHeader extends React.Component {
    render(){
        return(
                <header>
                    <Link to="/"><button class="logo">PageCOW</button></Link>        
                    <div class="topnav">
                        <Link to='/LoggedInHome'><button class="log-in-button">Log In</button></Link>
                        {/* <button class="sign-up-button">Sign Up</button> */}
                    </div>
                </header>
        )
    }
}

export default HomeHeader