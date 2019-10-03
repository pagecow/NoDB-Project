import React from 'react';
import {Link} from 'react-router-dom';
import TextEditorHeader from './TextEditorHeader';
import TextEditorToolBar from './TextEditorToolBar';


class TextEditor extends React.Component {
  render() {
    return (
        <div>
            <TextEditorHeader/>
            <TextEditorToolBar/>

            <vue-editor></vue-editor>
            
            
        </div>
    );
  }
}

export default TextEditor