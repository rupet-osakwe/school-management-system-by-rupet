import React, { useState } from "react";
import staffBaseApi from "../../services/staffBaseApiRequest";
import Heading from "../header";
const requestUrl = staffBaseApi.fetchOneStaff

const FetchOneStaff = () => {
    const [_id, set_Id] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleFetchOne = async () => {
        try {
            const result = await requestUrl(_id);
            if (!_id) {
                setErrorMessage('INVALID STAFF ID');
            }

            if (_id) {
                setResponse(result);
                setMessage("Staff's details retrieved successfully and the details are as follows:");
                console.log(result)
            }

        } catch (err) {
            console.log(err);
            setErrorMessage('Oops!! there was a problem, check your network connection and be sure you are sending the right staff Id.');
        }
    }
    const handleChange = (event) => {
        set_Id(event.target.value);
    }

    return (
        <div>
            <Heading />
            <div>
                {message ? (
                    <div className='result-response-message '>
                        {message}
                        {response && (
                            <div className="staff single-staff-details">
                                <div ><span className="key">First Name:</span> {response.data.firstName}</div>
                                <div ><span className="key">Last Name:</span> {response.data.lastName}</div>
                                <div><span className="key">Gender:</span> {response.data.gender}</div>
                                <div ><span className="key">Email:</span> {response.data.email}</div>
                                <div><span className="key">User Name:</span> {response.data.userName}</div>
                                <div><span className="key">Marital Status: </span>{response.data.maritalStatus}</div>
                                <div ><span className="key">Designation:{response.data.designation}</span></div>
                                <div ><span className="key">Staff ID:</span> {response.data._id}</div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {errorMessage ? (
                            <div className='errorMessage fetch-staff-error'>{errorMessage}</div>
                        ) : ("")}
                        <div className="staff-id-input-and-button">
                            <h5 className="input-name">Search Details...</h5>

                            <input type="text" placeholder="Staff ID" onChange={handleChange} />
                            <button className="search-button" onClick={handleFetchOne}>Search</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default FetchOneStaff;