import React from 'react';

class HomeBody extends React.Component {
    render(){
        return(
            <body>
                <div class='headline'>Write books on any device. Export in Amazon MOBI, ePub, Word, and PDF.</div>

                <div class='sub-headlines'>
                <img class='home-icon-1' src='https://static.thenounproject.com/png/2433751-200.png'/>
                        <ul>Designed for authors.</ul>
                    
                    <img class='home-icon-2' src='https://static.thenounproject.com/png/2566798-200.png'/>
                        <ul>Creates e-books and print books for you.</ul>
                    
                    <img class='home-icon-3' src='https://static.thenounproject.com/png/922833-200.png'/>
                        <ul>Files save automatically to the cloud.</ul>
                </div>    


                {/* SIGN UP FORM */}

                {/* <div className='sign-up-inputs'>
                    <input></input>
                    <input></input>
                </div> */}

                <div>
                    <button className='sign-up-form-button'>WRITE FREE FOR 30 DAYS</button>
                    <p class='sign-up-text'>Then $14.99/month. Cancel anytime.</p>
                </div>

            </body> 
        )
    }
}

export default HomeBody;