
import React, { useEffect, useState } from 'react';
import studentApiRequest from '../../services/studentBaseApiRequest';
import Heading from '../header';

const requestUrl = studentApiRequest.fetchAllStudents();

const RequestStudents = () => {
    const [result, setResult] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showStates, setShowStates] = useState([]);

    const getResults = async () => {
        try {
            const result = await requestUrl;
            setResult(result);
            console.log(result);
            setMessage('Details Of Registered Students');

            return result;
        } catch (error) {
            setErrorMessage('Error fetching data:');
            console.log('Error fetching data:', error);
        }
    };

    const toggleText = (index) => {
        const newShowStates = [...showStates];
        newShowStates[index] = !newShowStates[index];
        setShowStates(newShowStates);
        console.log(`you clicked ${index}`);
    };

    useEffect(() => {
        getResults();
    }, []);

    return (
        <div>
            <Heading />
            {message ? (
                <div>
                    {result && (
                        <div>
                            <div className='students'>
                                <h5 className='student-details-heading '>{message}</h5>
                                {result.map((res, index) => (
                                    <div key={index} className='student'>
                                        <div className='name' onClick={() => toggleText(index)}>
                                            {res.firstName} {res.lastName}
                                        </div>
                                        {showStates[index] && (
                                            <div className='details'>
                                                <div className='email'>Email: {res.email}</div>
                                                <div className='class'>Class: {res.studentClass}</div>
                                                <div className='DOB'>Date Of Birth: {res.dateOfBirth}</div>
                                                <div className='id'>_id: {res._id}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className='errorMessage'>{errorMessage}</div>
            )}
        </div>
    );
};

export default RequestStudents;
