import React from "react";
import { useState } from "react";
import staffBaseApi from "../services/staffBaseApiRequest";
import Heading from "./header";
import { useNavigate } from "react-router";
const logInUrl = staffBaseApi.logIn

const StaffAuth = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await logInUrl(userName, email);
            if (response?.status === 200) {
                setMessage(`Hello ${userName} You are currently online`)
                console.log('you are logged in', response);
                console.log('Logged In Successfully');
                navigate('/staffHomePage', { state: { message: `Hello ${userName} You are currently online` } });
            }
            if (response?.status !== 200) {
                setErrorMessage('Oops!! Seems there was a problem while trying to log in, check your credentials and also check your network connection')
            }
            return response

        } catch (err) {
            console.log(err)
            setTimeout(() => setErrorMessage(err?.response?.data), 2000)
        }
    }
    return (
        <div>
            <Heading />
            {errorMessage ? (<div className="errorMessage">{errorMessage}</div>) : ("")}
            {message ? (<div>{message}</div>) : (<div className="staff-login-inputs">
                <h5 className="input-name">Staff</h5>

                <input type="text" placeholder="User Name..." onChange={(event) => { setUserName(event.target.value) }} />
                <input type="email" placeholder="Email..." onChange={(event) => { setEmail(event.target.value) }} />
                <button className="log-in-button" onClick={handleLogin}>Login</button>
            </div >)
            }
        </div >
    )

}
export default StaffAuth