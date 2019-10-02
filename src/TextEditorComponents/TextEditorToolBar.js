import React from 'react';
import {Link} from "react-router-dom";

class TextEditorToolBar extends React.Component {
    render() {
        return(
            <div className="tool-bar">
                <button className='tb-undo'></button>
                <button className='tb-redo'></button>

                <button className='tb-font-family'></button>
                <button className='tb-font-size'></button>

                <button className='tb-font-bold'></button>
                <button className='tb-font-italic'></button>
                <button className='tb-font-underline'></button>



            </div>
        )
    }
}

export default TextEditorToolBar