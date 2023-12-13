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
                    <Link to="/StudentReg" className='single-nav'>Reg. Student</Link>
                    <Link to="/StudentInfos" className='single-nav'>All Students</Link>
                    <Link to="/CheckAStudentData" className='single-nav'>View Student</Link>
                    <Link to="/ResultsCheck" className='single-nav'>View Results</Link>
                </div>
                <div className='message student-online-message'>{message}</div>
                <div className='student-nav-bar-right'>
                    <Link to="/StaffDetails" className='single-nav'>All Staffs</Link>
                    <Link to="/UpdateStudentDetails" className='single-nav'>UpdateStudent</Link>
                    <Link to="/check-a-result" className='single-nav'>View Result</Link>
                    <Link to="/CheckAStaffData" className='single-nav'>View Staff</Link>
                </div>
            </div>

        </div>
    )
}

export default StudentHomePage