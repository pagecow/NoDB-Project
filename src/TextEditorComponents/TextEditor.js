import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLoggedIn from './HeaderLoggedIn';
import AppFromDev from '../DevMountainComponents/AppFromDev';

class TextEditor extends React.Component {
  render() {
    return (
        <div>
            <HeaderLoggedIn/>
            <AppFromDev/>
        </div>
    );
  }
}

export default TextEditor