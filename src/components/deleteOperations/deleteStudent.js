import React from "react";
import { useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from "../header";
const requestUrl = studentApiRequest.deleteStudent

const DeleteStudent = () => {
    const [studentId, setStudentId] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDelete = async () => {
        try {
            const data = await requestUrl(studentId)
            if (data) {
                setMessage(`Student with the ID ${studentId} was successfully deleted from the database`)
            }
            return;
        } catch (err) {
            setTimeout(() => setErrorMessage(err.message), 2000)
            console.log(err)
        }
    }
    const handleChange = (event) => {
        setStudentId(event.target.value)
        return
    }
    return (
        <div>
            <Heading />
            {errorMessage ? (<div className="errorMessage delete-student-error">{errorMessage}</div>) : ("")}
            {message ? (<div className="deleted-data-message response-message">{message}</div>) : (<div>
                <div className="delete-result-credentials">
                    <h5 className="input-name">Student's ID</h5>
                    <input type="text" placeholder="Student's ID" onChange={handleChange} />
                    <button className="deleteButton" onClick={handleDelete} >Delete</button>
                </div>
            </div>)}


        </div>

    )
}
export default DeleteStudent