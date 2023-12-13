import React, { useEffect, useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from "../header";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
const requestUrl = studentApiRequest.fetchOneStudent;
const requestUrl2 = studentApiRequest.deleteStudent;

const FetchOneStudentData = () => {
    const { _id } = useParams();
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    // const [successfulDelete, setSuccessfulDelete] = useState('');
    const [response, setResponse] = useState({})
    const navigate = useNavigate();
    const handleFetchOne = async () => {

        try {
            const result = await requestUrl(_id);

            setResponse(result)
            setMessage(`student with the ID ${_id} has his/her details as follows:`)
            console.log(response)
            return result
        } catch (err) {
            console.log(err);
            setErrorMessage(err.message);
            throw err
        }
    }
    const handleDelete = async () => {
        try {
            const result = await requestUrl2(_id);
            // setSuccessfulDelete(`Student with the ID ${_id} was successfully deleted from the database`);
            console.log(result);
            navigate('/Delete-message')
            return
        } catch (err) {
            setErrorMessage('Could not delete successfully, check your credentials and network connections.')
            console.log(err);
        }
    }

    useEffect(() => {
        handleFetchOne();
    }, []);
    return (
        <div>
            <div>
                {message ? (

                    <div className="result-response-message">
                        {message}
                        {response && (
                            <div>

                                <div className="single-student-details">
                                    <div className='name'>First Name: {response.firstName}</div>
                                    <div className='name'>Last Name: {response.lastName}</div>
                                    <div className='name'>Email: {response.email}</div>
                                    <div className="name">User Name: {response.UserName}</div>
                                    <div className='name'>Class: {response.studentClass}</div>
                                    <div className='name'>Gender: {response.gender}</div>
                                    <div className='name'>Date Of Birth: {response.dateOfBirth}</div>

                                    <div className='name'>Father's Name: {response.fathersName}</div>
                                    <div className='name'>Father's Phone Number: {response.fathersPhoneNumber}</div>
                                    <div className='name'>Mother's Name: {response.mothersName}</div>
                                    <div className='name'>Mother's Phone Number: {response.mothersPhoneNumber}</div>
                                    <div className='name'>Home Address: {response.homeAddress}</div>
                                    <div className='name'>id: {response._id}</div>
                                </div>
                                <div className="buttons-container">
                                    <button><Link to="/UpdateStudentDetails" className="update-link" >Update</Link></button>

                                    <button onClick={handleDelete}>Delete</button>

                                    <button className="btn" onClick={() => navigate(-1)}>Back</button>
                                </div>
                            </div>

                        )}
                    </div>
                ) : (<div className="student-id-input-and-button">
                    <h5 className="input-name">Searching Details...</h5>
                </div>)}

                {errorMessage ? (
                    <div className='errorMessage'>{errorMessage}</div>
                ) : ("")}
            </div>
        </div>
    );
}

export default FetchOneStudentData;
