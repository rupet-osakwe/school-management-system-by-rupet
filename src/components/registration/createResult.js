
import resultApiRequest from "../../services/resultApiRequest";
import React from "react";
import { useState } from "react";
import Heading from "../header";



const UploadResult = () => {
    const [resultDetails, setResultDetails] = useState({
        firstName: "",
        lastName: "",
        term: "",
        subject: "",
        score: "",
        grade: "",
        studentClass: ""
    })
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');


    const upload = async () => {

        try {
            const resultUrl = resultApiRequest.createNewResult({ ...resultDetails });
            const result = await resultUrl;
            if (result) {
                setMessage(`You Have Successfully Uploaded ${resultDetails.firstName} ${resultDetails.lastName}'s Results Into The School's Data Base `);
            }

            return result;
        } catch (err) {
            setTimeout(() => setErrorMessage(err.message), 2000)
            console.log(err)


        }

    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setResultDetails({ ...resultDetails, [name]: value })
    };
    return (
        <div>
            <Heading />
            {!message ? (<div className="resultInputs">
                <div className="input-name">Result Upload</div>
                <input type="text" placeholder="First Name" name="firstName" value={resultDetails.firstName} onChange={handleChange} />
                <input type="text" placeholder="Last Name" name="lastName" value={resultDetails.lastName} onChange={handleChange} />
                <input type="text" placeholder="Term" name="term" value={resultDetails.term} onChange={handleChange} />
                <input type="text" placeholder="Subject" name="subject" value={resultDetails.subject} onChange={handleChange} />
                <input type="text" placeholder="Score" name="score" value={resultDetails.score} onChange={handleChange} />
                <input type="text" placeholder="Grade" name="grade" value={resultDetails.grade} onChange={handleChange} />
                <input type="text" placeholder="Student's Class" name="studentClass" value={resultDetails.studentClass} onChange={handleChange} />

                <button className="uploadButton" onClick={upload}>Upload</button>
            </div >) : (<div className="message">{message}</div>)}
            {errorMessage ? (<div className="errorMessage">{errorMessage}</div>) : ("")}
        </div>

    )


}
export default UploadResult
