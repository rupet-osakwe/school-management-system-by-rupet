
import React, { useEffect, useState } from 'react';
import staffBaseApi from '../../services/staffBaseApiRequest';
import authHeader from '../../services/auth-header';
import Heading from '../header';

const RequestStaffs = () => {
    const [staff, setStaff] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showStates, setShowStates] = useState([]);

    const getStaffs = async () => {
        try {
            const requestUrl = staffBaseApi.fetchAllStaff({ headers: authHeader() });
            const response = await requestUrl;

            setStaff(response);
            console.log(response);
            setMessage('Staffs And Their Details');

            setShowStates(Array(response.length).fill(false));

            return response;
        } catch (error) {
            setTimeout(() => setErrorMessage(error.message), 2000);
            console.log('Error fetching data:', error.response);
        }
    };

    const toggleShow = (index) => {
        const newShowStates = [...showStates];
        newShowStates[index] = !newShowStates[index];
        setShowStates(newShowStates);
        console.log(`you clicked ${index}`);
    };

    useEffect(() => {
        getStaffs();
    }, []);

    return (
        <div>
            <Heading />
            {message ? (
                <div>
                    {staff && (
                        <div className='staffs'>
                            <h5 className='input-name staff-details-heading'>{message}</h5>
                            {staff.map((res, key) => (
                                <div key={key} className='staff'>
                                    <div className='name' onClick={() => toggleShow(key)}>
                                        {res.firstName} {res.lastName}
                                    </div>

                                    {showStates[key] && (
                                        <div className='details'>
                                            <div className='email'>Email: {res.email}</div>
                                            <div className='password'>Password: {res.password}</div>
                                            <div className='gender'>Gender: {res.gender}</div>
                                            <div className='designation'>Designation: {res.designation}</div>
                                            <div className='marital-status'>Marital Status: {res.maritalStatus}</div>
                                            <div className='id'>Staff ID: {res._id}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className='errorMessage'>{errorMessage}</div>
            )}
        </div>
    );
};

export default RequestStaffs;
