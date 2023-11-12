import React from 'react'
import { useNavigate } from 'react-router';

const Admin = () => {
    const navigate = useNavigate();
    const adminLogIn = () => {
        navigate('/Admin')
    }

    return (
        <div>
            <button onClick={adminLogIn} className='admin-button'>Admin</button>
        </div>
    )
}

export default Admin