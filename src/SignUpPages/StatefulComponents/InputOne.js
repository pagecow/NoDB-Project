import React from 'react';
import {Link} from 'react-router-dom';

class InputOne extends React.Component {
    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
        }
    }


    handleEmailChange = (value) => {
        console.log(value);
        this.setState({
            email: value
        })
    }

    handlePasswordChange = (value) => {
        console.log(value);
        this.setState({
            email: value
        })
    }

    axios.post('http://localhost:7777/api/users', {
        email: this.email,
        password: this.password
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error)
    });


    render(){
        return(
            <div>
                <input type='email' className='sign-up-inputs' placeholder="Email Address"
                onChange
                ></input>

                <br></br>
                <input type="password" className='sign-up-inputs' placeholder="Password"
                onChange
                ></input>
                
                <br></br>
                <Link to="/stepTwo"><button className='sign-up-form-button-2'
                onClick
                >CREATE ACCOUNT</button></Link>
            </div>
        )
    }
}


export default InputOne