import React from "react";
import { useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from '../header';



const UpdateStudent = () => {
    const [studentInfo, setStudentInfo] = useState({
        id: "",
        userName: "", email: "", firstName: "", lastName: "", dateOfBirth: "", studentClass: ""
    });
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const upDateStudentDetails = async () => {
        try {
            const requestUrl = studentApiRequest.updateStudent({ ...studentInfo });
            const request = await requestUrl
            setMessage('Student Detail(s) Updated successfully For')

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
            {message ? (<div className="message">{message} {studentInfo.firstName} {studentInfo.lastName}</div>) : (<div className="student-data-input">
                <h5 className="input-name">Update student</h5>
                <input type="text" placeholder="Change Student's ID" name="id" value={studentInfo.id} onChange={handleChange} />
                <input type="text" placeholder="Change User Name" name="userName" value={studentInfo.userName} onChange={handleChange} />
                <input type="email" placeholder="Change Email" name="email" value={studentInfo.email} onChange={handleChange} />
                <input type="text" placeholder="Change First Name" name="firstName" value={studentInfo.firstName} onChange={handleChange} />
                <input type="text" placeholder="Change Last Name" name="lastName" value={studentInfo.lastName} onChange={handleChange} />
                <input type="text" placeholder="Change Date Of Birth" name="dateOfBirth" value={studentInfo.dateOfBirth} onChange={handleChange} />
                <input type="text" placeholder="Change Student's Class" name="studentClass" value={studentInfo.studentClass} onChange={handleChange} />
                <button className="uploadButton" onClick={upDateStudentDetails}>UpDate</button>
            </div >)}
            {errorMessage ? (<div className="errorMessage" >{errorMessage}</div>) : ("")}
        </div>

    )
}

export default UpdateStudent