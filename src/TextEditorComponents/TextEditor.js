import React from 'react';
import {Link} from 'react-router-dom';
import TextEditorHeader from './TextEditorHeader';
import TextEditorToolBar from './TextEditorToolBar';
import {VueEditor} from 'vue2-editor';


class TextEditor extends React.Component {
  render() {
    return (
        <div>
            <TextEditorHeader/>
            <TextEditorToolBar/>

            {/* <VueEditor/> */}
            
            
        </div>
    );
  }
}

export default TextEditor