import React, { useState } from "react";
import resultApiRequest from "../../services/resultApiRequest";
import { FcSearch } from "react-icons/fc";
import Heading from "../header";
const requestUrl = resultApiRequest.fetchOneResult

const FetchOneResult = () => {
    const [_id, set_Id] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState({});
    const [message, setMessage] = useState("")


    const handleFetchOne = async () => {
        try {
            const result = await requestUrl(_id);
            setResponse(result);
            console.log('response', result)
            setMessage('Result successfully retrieved, details are as follows:')
            // setId("")

        } catch (err) {
            console.log(err);
            setErrorMessage(err.message);
        }
    }
    const handleChange = (event) => {
        set_Id(event.target.value);
    }

    return (
        <div>
            <Heading />
            {errorMessage ? (
                <div className='errorMessage'>{errorMessage}</div>
            ) : ("")}
            {!message ? (<div className="resultID-input-and-button">
                <h5 className="input-name">Search Details...</h5>

                <input type="text" placeholder="Result ID" onChange={handleChange} />
                <button className="search-icon-button" onClick={handleFetchOne}><FcSearch /></button>
            </div>) : (<div> <div className="result-response-message">{message}</div>
                <div className="result">
                    <div className='name'>Name: {response.data.firstName} {response.lastName}</div>
                    <div className='subject'>Subject: {response.data.subject}</div>
                    <div className='grade'>Grade: {response.data.grade}</div>
                    <div className='score'>Score: {response.data.score}</div>
                    <div className='class'>Class: {response.data.studentClass}</div>
                    <div className="result-id">Result ID:{response.data._id}</div>
                    <div className='term'>Term: {response.data.term}</div>
                </div>
            </div>)}
        </div >

    );
}

export default FetchOneResult;
