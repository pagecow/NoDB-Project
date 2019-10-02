import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLoggedIn from './HeaderLoggedIn';

class LoggedInHome extends React.Component {
    render() {
      return (
          <div>
              <HeaderLoggedIn/>
              <Link to="/TextEditor"><button className='create-a-document'>+</button></Link>
          </div>
      );
    }
  }


export default LoggedInHome