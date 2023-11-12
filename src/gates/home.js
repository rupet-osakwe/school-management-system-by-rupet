import React from 'react'
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const navigate = useNavigate();
    const homePage = () => {
        navigate('/')
    }

    return (
        <div>
            <button onClick={homePage} className='home-button'>Home</button>
        </div>
    )
}

export default LandingPage