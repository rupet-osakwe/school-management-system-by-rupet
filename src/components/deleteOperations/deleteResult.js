
import React from "react";
import { useState } from "react";
import resultApiRequest from "../../services/resultApiRequest";
import Heading from "../header";
;
const DeleteResult = () => {
    const [resultId, setResultId] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDelete = async () => {
        try {
            if (!resultId) {
                setTimeout(() => setErrorMessage('Result ID is required'), 2000);
                return;
            }

            const requestUrl = resultApiRequest.deleteResult(resultId)
            const response = await requestUrl;

            if (response.status === 200) {
                setMessage(`The result with the ID ${resultId} was successfully deleted`);
            } else {
                setTimeout(() => setErrorMessage('Failed to delete result.'), 2000)
            }

        } catch (err) {
            console.log(err);
            setTimeout(() => setErrorMessage('An error occurred while deleting the result'), 2000);
        }
    };
    const handleChange = (event) => {
        setResultId(event.target.value);
    };
    return (
        <div>
            <Heading />
            {errorMessage ? (<div className="errorMessage errorMessage-delete ">{errorMessage}</div>) : ("")}
            {message ? (<div className="deleted-data-message response-message">{message}</div>) : (<div className="deleteStaff-input">
                <h5 className="input-name">Result ID...</h5>
                <input type="text" placeholder="Result ID" onChange={handleChange} />
                <button className="deleteButton" onClick={handleDelete}>Delete</button>
            </div>)}
        </div>
    );
};
export default DeleteResult;