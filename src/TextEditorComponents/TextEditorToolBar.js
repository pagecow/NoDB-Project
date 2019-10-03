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
                <button className='tb-page-dimensions'></button>

                <button className='tb-font-bold'></button>
                <button className='tb-font-italic'></button>
                <button className='tb-font-underline'></button>

                <button className='tb-li-bullets'></button>
                <button className='tb-li-numbers'></button>

                <button className='tb-tab-left'></button>
                <button className='tb-tab-right'></button>

                <button className='tb-print'></button>

            </div>
        )
    }
}

export default TextEditorToolBar