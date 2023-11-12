
import React, { useEffect, useState } from 'react';
import studentApiRequest from '../../services/studentBaseApiRequest';
import Heading from '../header';
const requestUrl = studentApiRequest.fetchAllStudents();

const RequestStudents = () => {
    const [result, setResult] = useState([]);
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const getResults = async () => {
        try {
            const result = await requestUrl;
            setResult(result);
            console.log(result);
            setMessage('Details Of Registered Students');
            return result
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
                {result && <div> <div className='students'>
                    <h5 className='input-name student-details-heading '> {message}</h5>
                    {result.map((res, key) => (
                        <div key={key} className='student'>
                            <div className='name'> First Name: {res.firstName}</div>
                            <div className='name'> Last Name: {res.lastName}</div>
                            <div className='email'>Email: {res.email}</div>
                            <div className='class'>Class: {res.studentClass}</div>
                            <div className='DOB'>Date Of Birth: {res.dateOfBirth}</div>
                            <div className='id'>Reg. Number: {res._id}</div>
                        </div>
                    ))}
                </div></div>}
            </div>) : (<div className="errorMessage">{errorMessage}</div>)}
        </div>
    );
};

export default RequestStudents;