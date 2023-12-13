import React, { useEffect, useState } from "react";
import studentApiRequest from "../../services/studentBaseApiRequest";
import Heading from "../header";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import staffBaseApi from "../../services/staffBaseApiRequest";
const requestUrl = staffBaseApi.fetchOneStaff;
const requestUrl2 = staffBaseApi.deleteStaff;

const FetchOneStaffData = () => {
    const { _id } = useParams();
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [messageOnDelete, setMessageOnDelete] = useState('');
    const [response, setResponse] = useState({})
    const navigate = useNavigate();


    const handleFetchOne = async () => {
        try {
            const result = await requestUrl(_id);

            setResponse(result)
            setMessage(`staff with the ID ${_id} has his/her details as follows:`)
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
            setMessageOnDelete(`Staff with the ID ${_id} was successfully deleted from the database`);
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
            <div className="single-staff-details-container">
                {message ? (
                    <div className="result-response-message">
                        {message}
                        {response && (
                            <div>
                                <div className="staff single-staff-details">
                                    <div ><span className="key">First Name: {response.data.firstName}</span></div>
                                    <div ><span className="key">Last Name:{response.data.lastName}</span></div>
                                    <div><span className="key">Gender: {response.data.gender}</span></div>
                                    <div ><span className="key">Email: {response.data.email}</span></div>
                                    <div><span className="key">User Name: {response.data.userName}</span></div>
                                    <div><span className="key">Marital Status: {response.data.maritalStatus}</span></div>
                                    <div ><span className="key">Designation:{response.data.designation}</span></div>
                                    <div ><span className="key">Staff ID: {response.data._id}</span></div>
                                </div>
                                <div className="buttons-container">
                                    <button><Link to="/UpdateStaffDetails" className="update-link">Update</Link></button>

                                    <button onClick={handleDelete}>Delete</button>
                                    {messageOnDelete && <div>{messageOnDelete}</div>}

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

export default FetchOneStaffData;
