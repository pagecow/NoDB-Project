import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
            password: value
        })
    }

    handlePost = () => {
        axios.post('http://localhost:7777/api/users', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error)
        });
    }


    render(){
        return(
            <div>
                <input type='email' className='sign-up-inputs' placeholder="Email Address"
                onChange={e => this.handleEmailChange(e.target.value)}
                ></input>

                <br></br>
                <input type="password" className='sign-up-inputs' placeholder="Password"
                onChange={e => this.handlePasswordChange(e.target.value)}
                ></input>
                
                <br></br>
                <Link to="/stepTwo"><button className='sign-up-form-button-2'
                onClick={this.handlePost}
                >CREATE ACCOUNT</button></Link>
            </div>
        )
    }
}


export default InputOne