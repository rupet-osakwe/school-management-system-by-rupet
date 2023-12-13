
import { useState } from "react";
import adminLogin from "../services/adminApiRequest";
import { useNavigate } from 'react-router-dom';
import Heading from "./header";

export const AdminAuth = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    const logIn = async () => {
        try {
            const response = await adminLogin(userName, password, email);
            if (response?.status === 200) {

                setEmail("");
                setPassWord("");
                setUserName("");
                setErrorMessage("")
                setTimeout(() => setMessage(`Hello Mr ${userName}, welcome to the admin's dashboard`), 3000)
                console.log(`Hello Mr ${userName}, welcome to the admin's dashboard`);

                console.log('Welcome Admin');
                console.log('Logged In Successfully', response);
                navigate('/adminHomePage', { state: { message: `Hello Mr ${userName}, welcome to the admin's dashboard` } });
            }
            if (response?.status !== 200) {
                setErrorMessage('check your credentials and be sure you are connected to the internet')
            }

            return;


        } catch (err) {
            console.log(err.message);
            throw (err)
            return;
        }
    }
    return (
        <div>
            <Heading />
            {errorMessage ? (<div className="errorMessage">{errorMessage}</div>) : ("")}
            {message ? (<div className="message">{message}</div>) : (<div className="adminCredentials">
                <h5 className="input-name">Admin</h5>
                <input type="text" placeholder="User Name..." name="userName" onChange={(event) => { setUserName(event.target.value) }} />
                <input type="text" placeholder="Password..." name="password" onChange={(event) => setPassWord(event.target.value)} />
                <input type="email" placeholder="Email..." name="email" onChange={(event) => setEmail(event.target.value)} />
                <button className="log-in-button" onClick={logIn}> Log In</button>
            </div >)}
        </div>

    )
}

