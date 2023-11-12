import React from 'react'
import { useNavigate } from 'react-router';

const Student = () => {
    const navigate = useNavigate();
    const studentLogIn = () => {
        navigate('/StudentLogin')
    }

    return (
        <div>
            <button onClick={studentLogIn} className='student-button'>Student</button>
        </div>
    )
}

export default Student