
import React, { useEffect, useState } from 'react';
import resultApiRequest from '../../services/resultApiRequest';
import Heading from '../header';
import '../../App.css'
import studentsWalking from '../../images/studentsWalking.jpg'
const requestUrl = resultApiRequest.fetchAllResults()

const RequestResults = () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('')

    const getResults = async () => {
        try {
            const response = await requestUrl;
            setResult(response);
            console.log(response.data);
            setMessage('Uploaded Results')
            return response
        } catch (error) {
            setTimeout(() => setErrorMessage('Error fetching data:', error), 2000)
            console.log('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getResults();
    }, [])

    return (
        <div>
            <Heading />

            {message ? (<div>
                {result && <div>
                    <div className='results'>
                        <h5 className='result-details-heading' >{message}</h5>
                        {result?.map((res, key) => (
                            <div key={key} className='result'>
                                <div className='name'>Name: {res.firstName} {res.lastName}</div>
                                <div className='subject'>Subject: {res.subject}</div>
                                <div className='grade'>Grade: {res.grade}</div>
                                <div className='score'>Score: {res.score}</div>
                                <div className='class'>Class: {res.studentClass}</div>
                                <div className='term'>Term: {res.term}</div>
                                <div className='id'>result ID: {res._id}</div>
                            </div>
                        ))}
                    </div></div>}
            </div>) : (<div className="errorMessage">{errorMessage}</div>)}
        </div>
    );
};

export default RequestResults;