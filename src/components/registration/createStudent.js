import React from "react";
import { useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from "../header";

const UploadNewStudent = () => {
    const [studentInfo, setStudentInfo] = useState({
        userName: "", email: "", firstName: "", lastName: "", dateOfBirth: "", studentClass: ""
    });
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const uploadDetails = async () => {
        try {
            const requestUrl = studentApiRequest.createNewStudent({ ...studentInfo });
            const request = await requestUrl
            setMessage('Student upload was successful, Name:')

            console.log(request)
            return
        } catch (err) {
            console.log(err)
            setErrorMessage('OOPS!! Unsuccessful')
        }
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudentInfo({ ...studentInfo, [name]: value })
    };
    return (
        <div className="container">
            <Heading />
            {message ? (<div className="message studentUpload-response">{message} {studentInfo.firstName} {studentInfo.lastName}</div>) : (<div className="student-data-input">
                <h5 className="input-name student-form-heading">Student's Registration Form</h5>

                <input type="text" placeholder="User Name" name="userName" onChange={handleChange} />

                <input type="email" placeholder="Email" name="email" onChange={handleChange} />

                <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />

                <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />

                <input type="text" placeholder="Date Of Birth" name="dateOfBirth" onChange={handleChange} />

                <input type="text" placeholder="Student's Class" name="studentClass" onChange={handleChange} />
                <button className="uploadButton" onClick={uploadDetails}>Upload</button>
            </div>)}
            {errorMessage ? (<div>{errorMessage}</div>) : ("")}
        </div>
    )
}

export default UploadNewStudent