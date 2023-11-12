import React from "react";
import { useState } from "react";
import resultApiRequest from "../../services/resultApiRequest";
import Heading from "../header";


const UpdateResultContent = () => {
    const [resultDetails, setResultDetails] = useState({
        id: "", firstName: "", lastName: "", term: "", subject: "", score: "", grade: "", studentClass: ""
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const updateDetail = async () => {
        try {
            const requestUrl = resultApiRequest.updateResult({ ...resultDetails });
            const response = await requestUrl
            const data = response.data
            if (response.status === 200) {
                setMessage(`Result updated successfully as follows: Name: ${data.firstName} ${data.lastName}, Grade: ${data.grade}, Score: ${data.score}, Subject: ${data.subject}, Term:  ${data.term}, Class ${data.studentClass}.`)
            }
            return
        } catch (err) {
            setTimeout(() => setErrorMessage('Failed to update', err.message), 2000)
            console.log(err)
        }

    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value;
        setResultDetails({ ...resultDetails, [name]: value });
    }


    return (
        <div>
            <Heading />
            {message ? (<div className="message response-message">{message}</div>) : (<div className="resultInputs">
                <h5 className="input-name">Update Result Details</h5>
                <input type="text" placeholder="Result's ID" name="id" value={resultDetails.id} onChange={handleChange} />
                <input type="text" placeholder="Change First Name" name="firstName" value={resultDetails.firstName} onChange={handleChange} />
                <input type="text" placeholder="Change Last Name" name="lastName" value={resultDetails.lastName} onChange={handleChange} />
                <input type="text" placeholder="Change Term" name="term" value={resultDetails.term} onChange={handleChange} />
                <input type="text" placeholder="Change Subject" name="subject" value={resultDetails.subject} onChange={handleChange} />
                <input type="text" placeholder="Change Score" name="score" value={resultDetails.score} onChange={handleChange} />
                <input type="text" placeholder="Change Grade" name="grade" value={resultDetails.grade} onChange={handleChange} />
                <input type="text" placeholder="Change Student's Class" name="studentClass" value={resultDetails.studentClass} onChange={handleChange} />
                <button className="uploadButton" onClick={updateDetail}>Update</button>
            </div >)}
            {errorMessage ? (<div className="errorMessage">{errorMessage}</div>) : ("")}
        </div>
    )
}
export default UpdateResultContent