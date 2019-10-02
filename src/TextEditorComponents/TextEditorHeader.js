import React from 'react';
import {Link} from "react-router-dom";

class TextEditorHeader extends React.Component {
    render(){
        return(
                <div className='text-editor-header'>
                    <Link to="/LoggedInHome"><button class="logo">PageCOW</button></Link>        
                    <div class="topnav">
                        <Link to="/"><button class="log-in-button">Sign Out</button></Link>
                        {/* <button class="sign-up-button">Sign Up</button> */}
                    </div>
                </div>
        )
    }
}

export default TextEditorHeader