import React, { useState } from "react";
import resultApiRequest from "../../services/resultApiRequest";
import { FcSearch } from "react-icons/fc";
import Heading from "../header";
const requestUrl = resultApiRequest.fetchOneResult

const FetchOneResult = () => {
    const [resultId, setResultId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState({});
    const [message, setMessage] = useState("")


    const handleFetchOne = async () => {
        try {
            const result = await requestUrl(resultId);
            setResponse(result);
            console.log(result.data)
            setMessage('Result successfully retrieved, details are as follows:')
            setResultId("")

        } catch (err) {
            console.error(err);
            setTimeout(() => setErrorMessage(err.message), 2000);
        }
    }
    const handleChange = (event) => {
        setResultId(event.target.value);
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
                    <div className='name'>Name: {response.firstName} {response.lastName}</div>
                    <div className='subject'>Subject: {response.subject}</div>
                    <div className='grade'>Grade: {response.grade}</div>
                    <div className='score'>Score: {response.score}</div>
                    <div className='class'>Class: {response.studentClass}</div>
                    <div className="result-id">Result ID:{response._id}</div>
                    <div className='term'>Term: {response.term}</div>
                </div>
            </div>)}
        </div >

    );
}

export default FetchOneResult;
