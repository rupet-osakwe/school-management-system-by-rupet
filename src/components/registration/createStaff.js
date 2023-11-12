import React from "react";
import { useState } from "react";
import staffBaseApi from "../../services/staffBaseApiRequest";
import Heading from "../header";


const UploadNewStaff = () => {
    const [staffDetails, setStaffDetails] = useState({
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
        designation: "",
        maritalStatus: "",
        phoneNumber: ""
    });


    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const uploadData = async () => {
        console.log('staffDetails', staffDetails);
        try {

            const requestUrl = staffBaseApi.createNewStaff({ ...staffDetails });
            const request = await requestUrl;
            if (request) {

                const data = request;
                setMessage('Staff Details Successfully Uploaded, a mail has been sent to the registered email Address, check inbox for registration details');
                console.log('response', request)
                return request
            }
            return
        } catch (err) {
            console.log(err)
            setErrorMessage(err.message)
        }
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStaffDetails({ ...staffDetails, [name]: value });
    };
    return (
        <div>
            <Heading />
            {!message
            }
            {message ? (<div className="message response-message">{message}</div>) : (<div className="new-staff-inputs">
                <h5 className="input-name">Staff Inputs</h5>

                <input type="text" placeholder="User Name" name="userName" onChange={handleChange} />
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
                <input type="text" placeholder="Password" name="password" onChange={handleChange} />
                <input type="text" placeholder="Gender" name="gender" onChange={handleChange} />
                <input type="text" placeholder="Designation" name="designation" onChange={handleChange} />
                <input type="text" placeholder="Marital Status" name="maritalStatus" onChange={handleChange} />
                <input type="tel" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />

                <button className="uploadButton" onClick={uploadData}>Upload</button>
            </div >)}
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </div>
    )
}
export default UploadNewStaff
