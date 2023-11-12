import React from 'react'
import { useNavigate } from 'react-router';

const Staff = () => {
    const navigate = useNavigate();
    const staffLogIn = () => {
        navigate('/StaffLogin')
    }

    return (
        <div>
            <button onClick={staffLogIn} className='staff-button'>Staff</button>
        </div>
    )
}

export default Staff