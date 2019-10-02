import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';

import HomeBody from './HomeComponents/HomeBody';
import StepOne from './SignUpPages/StepOne';
import StepTwo from './SignUpPages/StepTwo';
import TextEditor from './TextEditorComponents/TextEditor';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomeBody}/>
      <Route exact path='/stepOne' component={StepOne}/>
      <Route exact path='/stepTwo' component={StepTwo}/>
      <Route exact path='/TextEditor' component={TextEditor}/>
    </div>
  );
}

export default App;