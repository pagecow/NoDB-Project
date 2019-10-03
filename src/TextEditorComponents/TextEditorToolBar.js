import React from 'react';
import {Link} from "react-router-dom";

class TextEditorToolBar extends React.Component {
    render() {
        return(
            <div className="tool-bar">
                <div className="tool-bar-buttons">
                    <button className='tb-undo'></button>
                    <button className='tb-redo'></button>

                    <button className='tb-font-family'></button>
                    <button className='tb-font-size'></button>
                    <button className='tb-page-dimensions'></button>

                    <button className='tb-font-bold'>B</button>
                    <button className='tb-font-italic'>I</button>
                    <button className='tb-font-underline'>U</button>

                    <button className='tb-li-bullets'></button>
                    <button className='tb-li-numbers'></button>

                    <button className='tb-tab-left'></button>
                    <button className='tb-tab-right'></button>

                    <button className='tb-print'></button>
                </div>
            </div>
        )
    }
}

export default TextEditorToolBar