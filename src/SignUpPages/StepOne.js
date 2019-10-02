import React from 'react';
import {Link} from 'react-router-dom';
import HomeHeader from '../HomeComponents/HomeHeader';


class StepOne extends React.Component {
    render(){
        return (
            <div>
                <HomeHeader/>
                <div className='sign-up-page'>
                    <div>
                        <p className='step-one-header'>Step 1 of 2</p>
                        <p className='step-one-sub-header'>Create an account.</p>
                        <input className='sign-up-inputs' placeholder="Email Address"></input>
                        <br></br>
                        <input type="password" className='sign-up-inputs' placeholder="Password"></input>
                        <br></br>
                        <Link to="/stepTwo"><button className='sign-up-form-button-2'>CREATE ACCOUNT</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepOne;