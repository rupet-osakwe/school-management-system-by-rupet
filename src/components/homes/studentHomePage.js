import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../App.css';

import { Routes, Route, Link } from 'react-router-dom';
import Heading from '../header';
const StudentHomePage = () => {
    const location = useLocation();
    const message = location.state?.message || '';
    return (
        <div>
            <Heading />
            <div className='student-nav-bar'>
                <div className='student-nav-bar-left'>
                    <Link to="/StudentReg" className='single-nav'>StudentReg</Link>
                    <Link to="/StudentLogin" className='single-nav'>StudentLogin</Link>
                    <Link to="/CheckAStudentData" className='single-nav'>CheckAStudentData</Link>
                    <Link to="/ResultsCheck" className='single-nav'>CheckResults</Link>
                </div>
                <div className='message student-online-message'>{message}</div>
                <div className='student-nav-bar-right'>
                    <Link to="/StudentInfos" className='single-nav'>StudentInfo</Link>
                    <Link to="/StaffDetails" className='single-nav'>StaffInfo</Link>
                    <Link to="/UpdateStudentDetails" className='single-nav'>UpdateStudentDetails</Link>
                    <Link to="/check-a-result" className='single-nav'>check-a-result</Link>
                    <Link to="/CheckAStaffData" className='single-nav'>CheckAStaffData</Link>
                </div>
            </div>

        </div>
    )
}

export default StudentHomePage