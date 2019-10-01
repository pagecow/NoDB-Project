import React from 'react';
import {Link} from 'react-router-dom';

class StepOne extends React.Component {
    render(){
        return (
            <div className='sign-up-page'>
                
                <div>
                    <p className='step-one-header'>Step 2 of 2</p>
                    <p className='step-one-sub-header'>Add a payment method.</p>
                    <p className='step-one-sub-header-2'>Your first 30 days are free. Cancel before 30 days and you won't be charged.</p>
                    <p className='step-one-sub-header-2'>After 30 days, you'll be charged $14.99/month. No commitments. Cancel anytime.</p>
                    
                    <Link to="/stepTwo"><button className='sign-up-form-button-3'>SIGN UP</button></Link>
                </div>

            </div>
        )
    }
}

export default StepOne;