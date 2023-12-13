import React from "react";
import { useState } from "react";
import studentApiRequest from "../services/studentBaseApiRequest";
import { useNavigate } from "react-router";
import Heading from "./header";
import authHeader from "../services/auth-header";
const logInUrl = studentApiRequest.logIn

const StudentAuth = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('')


    const handleLogin = async () => {
        try {
            const response = await logInUrl(userName, email, { headers: authHeader() });
            if (response?.status === 200) {
                setMessage(`Hello ${userName}, you are currently logged in`);
                console.log('you are logged in');
                setUserName('');
                setEmail('');
                setErrorMessage('')
                navigate('/StudentHomePage', { state: { message: `Hello ${userName} you are currently logged in` } });
            }
            if (response?.status !== 200) {
                setErrorMessage('Oops!! Seems there was a problem while to logging in, check your credentials and your network connections')
            }
            return response
        } catch (err) {
            console.log(err);
            throw err
        }
    }
    return (
        <div>
            <Heading />
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {message ? (<div className="message student-login-response"> {message}</div>) : (<div className="student-login-inputs">
                <h5 className="input-name">Student</h5>
                <input type="text" placeholder="User Name..." onChange={(event) => { setUserName(event.target.value) }} />
                <input type="email" placeholder="Email..." onChange={(event) => { setEmail(event.target.value) }} />
                <button className="log-in-button" onClick={handleLogin}>Login</button>
            </div >)}
        </div>

    )

}
export default StudentAuth