import React from 'react';
import {Link} from "react-router-dom";
import HeaderLoggedIn from '../TextEditorComponents/HeaderLoggedIn';
import axios from 'axios';


class ProfilePage extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:7777/api/users')
            .then(res => {
                const data = res.data;
                this.setState({
                    email: data.email,
                    password: data.password
                })
            });
    }
    
    
    render() {
        console.log(this.state)
        return(
            <div>
                <HeaderLoggedIn/>
                <div id="profile-body">
                    <h2 className="profile-headline">Profile Settings</h2>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.password}</h3>
                </div>
            </div>
        )
    }
}

export default ProfilePage