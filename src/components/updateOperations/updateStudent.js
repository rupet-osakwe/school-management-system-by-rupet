import React from "react";
import { useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from '../header';

const UpdateStudent = () => {
    const [studentInfo, setStudentInfo] = useState({
        _id: "",
        userName: "", email: "", firstName: "", lastName: "", dateOfBirth: "", studentClass: "", gender: "", fathersName: "", fathersPhoneNumber: "", mothersName: "", mothersPhoneNumber: "", homeAddress: ""
    });
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const upDateStudentDetails = async () => {
        try {
            const requestUrl = studentApiRequest.updateStudent({ ...studentInfo });
            const request = await requestUrl
            setMessage('Student Detail(s) Updated successfully')

            console.log(request)
            return request
        } catch (err) {
            console.log(err)
            setTimeout(() => setErrorMessage(err.response.data), 2000)
        }
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudentInfo({ ...studentInfo, [name]: value });
    };
    return (
        <div>
            <Heading />
            {message ? (<div className="message response-message">{message} {studentInfo.firstName} {studentInfo.lastName} </div>) : (<div className="student-data-input">
                <h5 className="input-name">Update student</h5>
                <input type="text" placeholder="Change User ID" name="_id" value={studentInfo._id} onChange={handleChange} />
                <input type="text" placeholder="Change User Name" name="userName" value={studentInfo.userName} onChange={handleChange} />
                <input type="email" placeholder="Change Email" name="email" value={studentInfo.email} onChange={handleChange} />
                <input type="text" placeholder="Change First Name" name="firstName" value={studentInfo.firstName} onChange={handleChange} />
                <input type="text" placeholder="Change Last Name" name="lastName" value={studentInfo.lastName} onChange={handleChange} />
                <input type="text" placeholder="Change Date Of Birth" name="dateOfBirth" value={studentInfo.dateOfBirth} onChange={handleChange} />
                <input type="text" placeholder="Change Student's Class" name="studentClass" value={studentInfo.studentClass} onChange={handleChange} />
                <input type="text" placeholder="Change Student's Gender" name="gender" value={studentInfo.gender} onChange={handleChange} />
                <input type="text" placeholder="Change Father's Name" name="fathersName" value={studentInfo.fathersName} onChange={handleChange} />
                <input type="tel" placeholder="Change Father's Phone Number" name="fathersPhoneNumber" value={studentInfo.fathersPhoneNumber} onChange={handleChange} />
                <input type="text" placeholder="Change Mother's Name" name="mothersName" value={studentInfo.mothersName} onChange={handleChange} />
                <input type="tel" placeholder="Change mother's Phone Number" name="mothersPhoneNumber" value={studentInfo.mothersPhoneNumber}
                    onChange={handleChange} />
                <input type="text" placeholder="Change Student's Home Address " name="homeAddress" value={studentInfo.homeAddress} onChange={handleChange} />
                <button className="uploadButton" onClick={upDateStudentDetails}>Update</button>
            </div >)}
            {errorMessage ? (<div className="errorMessage" >{errorMessage}</div>) : ("")}
        </div>

    )
}

export default UpdateStudent