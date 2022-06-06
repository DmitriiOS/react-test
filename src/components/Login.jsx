import './Login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let isUserLoggedIn = false

function Login() {
    
    const fakeName = 'Admin'
    const fakePass = '12345'

    let [userName, setUserName] = useState('')
    let [userPassword, setUserPassword] = useState('')

    function checkNamePass(e) {
        e.preventDefault()
        isUserLoggedIn = (userName == fakeName && userPassword == fakePass)
        localStorage.setItem('isUserLoggedIn', isUserLoggedIn)
        console.log(isUserLoggedIn)
        isUserLoggedIn ? window.location = '/profile' : window.location = '/'   
    }

    return (
        <form>
            <fieldset>
                <legend>Enter your data</legend>
                <input type='text' name='username' placeholder='username' required onChange={(event) => setUserName(event.target.value)} />
                <input type='password' name='password' placeholder='password' required onChange={(event) => setUserPassword(event.target.value)} />
                <button type='submit' onClick={checkNamePass}>Log in</button>
            </fieldset>
        </form>
    )
}
   
export default Login;