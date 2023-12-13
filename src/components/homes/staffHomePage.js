import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Heading from '../header';
const StaffHomePage = () => {
    const location = useLocation();
    const message = location.state?.message || '';
    return (
        <div>
            <Heading />
            <div className='staff-nav-bar'>
                <div className='staff-nav-bar-left'>
                    <Link to="/ResultUpload" className='single-nav'>Upload result</Link>
                    <Link to="/StudentReg" className='single-nav'>Reg student</Link>
                    <Link to="/ResultsCheck" className='single-nav'>view-results</Link>
                    <Link to="/StudentInfos" className='single-nav'>All-students</Link>
                    <Link to="/StaffDetails" className='single-nav'>All staffs</Link>
                    <Link to="/DeleteStudent" className='single-nav'>DeleteStudent</Link>
                </div>
                <div className='message staff-online-message'>{message}</div>
                <div className='staff-nav-bar-right'>
                    <Link to="/UpdateResult" className='single-nav'>UpdateResult</Link>
                    <Link to="/UpdateStudentDetails" className='single-nav'>Update-student</Link>
                    <Link to="/DeleteResult" className='single-nav'>DeleteResult</Link>
                    <Link to="/check-a-result" className='single-nav'>view-result</Link>
                    <Link to="/CheckAStudentData" className='single-nav'>view-student</Link>
                    <Link to="/CheckAStaffData" className='single-nav'>view-staff</Link>
                </div>
            </div>

        </div>
    )
}

export default StaffHomePage