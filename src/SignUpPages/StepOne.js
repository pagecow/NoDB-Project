import React from 'react';
import {Link} from 'react-router-dom';
import HomeHeader from '../HomeComponents/HomeHeader';
import InputOne from './StatefulComponents/InputOne';



class StepOne extends React.Component {
    render(){
        return (
            <div>
                <HomeHeader/>
                <div className='sign-up-page'>
                    <div>
                        <p className='step-one-header'>Step 1 of 2</p>
                        <p className='step-one-sub-header'>Create an account.</p>
                        <InputOne/>      
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default StepOne;