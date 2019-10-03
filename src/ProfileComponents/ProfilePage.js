import React from 'react';
import {Link} from "react-router-dom";
import HeaderLoggedIn from '../TextEditorComponents/HeaderLoggedIn';
import axios from 'axios';


class ProfilePage extends React.Component {
    constructor(){
        super();

        this.state = {
            email: 'pagecow@gmail.com',
            password: 'jake',
        }
    }

    // componentDidMount() {
    //     axios
    //         .get('http://localhost:7777/api/users')
    //         .then(res => {
    //             const data = res.data;
    //             this.setState({
    //                 email: data.email,
    //                 password: data.password
    //             })
    //         });
    // }

        handleEmailChange() {

        }

        handleEmailChange() {
            
        }

        handleDeleteRequest() {
            
        }
    
    
    render() {
        console.log(this.state)
        return(
            <div>
                <HeaderLoggedIn/>
                <div id="profile-body">
                    <h2 className="profile-headline">Profile Settings</h2>
                    
                    <p className='profile-sub-headline'>Email: {this.state.email}</p>
                       <input className='update-input' placeholder="New Email"></input> 
                       <br></br>
                       <button className='update-button'>Update Email</button>
                       <br></br>

                    <p className='profile-sub-headline'>Password: {this.state.password}</p>
                        <input className='update-input' placeholder="New Password"></input> 
                        <br></br>
                        <button className='update-button'>Update Password</button>

                    <Link to='/'><button className='delete-account-button'>Delete My Account</button></Link>
                    
                </div>
            </div>
        )
    }
}

export default ProfilePage