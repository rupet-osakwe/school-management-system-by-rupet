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
                    <Link to="/StaffLogin" className='single-nav'>staffLogIn</Link>
                    <Link to="/ResultUpload" className='single-nav'>ResultUpload</Link>
                    <Link to="/StudentReg" className='single-nav'>StudentReg</Link>
                    <Link to="/ResultsCheck" className='single-nav'>CheckResults</Link>
                    <Link to="/StudentInfos" className='single-nav'>StudentInfo</Link>
                    <Link to="/StaffDetails" className='single-nav'>StaffInfo</Link>
                </div>
                <div className='message staff-online-message'>{message}</div>
                <div className='staff-nav-bar-right'>
                    <Link to="/UpdateResult" className='single-nav'>UpdateResult</Link>
                    <Link to="/UpdateStudentDetails" className='single-nav'>UpdateStudentDetails</Link>
                    <Link to="/DeleteStudent" className='single-nav'>DeleteStudent</Link>
                    <Link to="/DeleteResult" className='single-nav'>DeleteResult</Link>
                    <Link to="/check-a-result" className='single-nav'>check-a-result</Link>
                    <Link to="/CheckAStudentData" className='single-nav'>CheckAStudentData</Link>
                    <Link to="/CheckAStaffData" className='single-nav'>CheckAStaffData</Link>
                </div>
            </div>

        </div>
    )
}

export default StaffHomePage