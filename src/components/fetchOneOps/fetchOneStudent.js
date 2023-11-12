import React, { useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from "../header";
const requestUrl = studentApiRequest.fetchOneStudent;

const FetchOneStudent = () => {
    const [id, setId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState({})
    const handleFetchOne = async () => {

        try {
            const result = await requestUrl(id);

            setResponse(result)
            setMessage(`student with the ID ${id} has his/her details as follows:`)
            console.log(response)
            return result
        } catch (err) {
            console.error(err);
            setTimeout(() => setErrorMessage(err.message), 2000);
            throw err
        }
    }
    const handleChange = (event) => {
        setId(event.target.value);
    }
    return (
        <div>
            <Heading />
            <div>
                {message ? (
                    <div className="result-response-message">
                        {message}
                        {response && (
                            <div className="single-student-details">
                                <div className='name'>First Name: {response.firstName}</div>
                                <div className='name'>Last Name: {response.lastName}</div>
                                <div className='email'>Email: {response.email}</div>
                                <div className='class'>Class: {response.studentClass}</div>
                                <div className='DOB'>Date Of Birth: {response.dateOfBirth}</div>
                                <div className='id'>Reg. Number: {response.id}</div>
                            </div>
                        )}
                    </div>
                ) : (<div className="student-id-input-and-button">
                    <h5 className="input-name">Search Details...</h5>
                    <input type="text" placeholder="Student's ID" onChange={handleChange} />
                    <button className="search-button" onClick={handleFetchOne}>Search</button></div>)}

                {errorMessage ? (
                    <div className='errorMessage'>{errorMessage}</div>
                ) : ("")}
            </div>
        </div>
    );
}

export default FetchOneStudent;
