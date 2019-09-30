import React from 'react';

class HomeHeader extends React.Component {
    render(){
        return(
                <header>
                    <div class="logo">PageCOW</div>        
                    <div class="topnav">
                        <button class="log-in-button">Log In</button>
                        {/* <button class="sign-up-button">Sign Up</button> */}
                    </div>
                </header>
        )
    }
}

export default HomeHeader