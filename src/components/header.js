import React from 'react'
import { MdAnchor } from 'react-icons/md';
import Admin from '../gates/admin';
import Staff from '../gates/staff';
import Student from '../gates/students';
import LandingPage from '../gates/home';

const Heading = () => {
    return (
        <div>
            <div className='homeAndLogo'>
                <MdAnchor className='logo' /><h4>Grace And Truth Academy, Lagos.  <span className='motto'>MOTTO: CHRIST IN ME...</span></h4>
            </div>
            <div className='nav'><LandingPage /><Admin /><Staff /> <Student /></div>
        </div>
    )
}

export default Heading