import React from 'react';
import './App.css';
import HomeHeader from './HomeComponents/HomeHeader';
import HomeBody from './HomeComponents/HomeBody';
import StepOne from './SignUpPages/StepOne';
import StepTwo from './SignUpPages/StepTwo';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomeHeader/>
      <Route exact path='/' component={HomeBody}/>
      <Route exact path='/stepOne' component={StepOne}/>
      <Route exact path='/stepTwo' component={StepTwo}/>

    </div>
  );
}

export default App;