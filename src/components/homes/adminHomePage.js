import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../App.css';
import { Routes, Route, Link } from 'react-router-dom';
import StudentData from '../user-data/student-data';
import StaffData from '../user-data/staffData';
import Heading from '../header';


const AdminHomePage = () => {
    const [show, setShow] = useState(false)
    const location = useLocation();
    const message = location.state?.message || '';

    const toggle = () => {
        setShow(!show)
    }
    return (
        <div className='home-page-container'>
            <Heading />
            <div className='admin-nav-container'>
                <button className='more-button' onClick={toggle}>More</button>
                {show ? (
                    <div className='admin-more' >
                        <Link to="/ResultUpload" className='single-nav'>ResultUpload</Link>
                        <Link to="/StudentReg" className='single-nav'>StudentReg</Link>
                        <Link to="/StaffReg" className='single-nav'>StaffReg</Link>
                        <Link to="/ResultsCheck" className='single-nav'>CheckResults</Link>
                        <Link to="/StudentInfos" className='single-nav'>StudentInfo</Link>
                        <Link to="/StaffDetails" className='single-nav'>StaffInfo</Link>
                        <Link to="/UpdateResult" className='single-nav'>UpdateResult</Link>
                        <Link to="/UpdateStaffDetails" className='single-nav'>UpdateStaffDetails</Link>
                        <Link to="/UpdateStudentDetails" className='single-nav'>UpdateStudentDetails</Link>
                        <Link to="/DeleteStaff" className='single-nav'>DeleteStaff</Link>
                        <Link to="/DeleteStudent" className='single-nav'>DeleteStudent</Link>
                        <Link to="/DeleteResult" className='single-nav'>DeleteResult</Link>
                        <Link to="/check-a-result" className='single-nav'>check-a-result</Link>
                        <Link to="/CheckAStudentData" className='single-nav'>CheckAStudentData</Link>
                        <Link to="/CheckAStaffData" className='single-nav'>CheckAStaffData</Link>
                    </div>
                ) : (<div className='admin-nav-bar'>

                    <div className='admin-nav-bar-left'>

                        <StaffData />

                    </div>
                    <div className='message admin-welcome-message'>{message}</div>
                    <div className='admin-nav-bar-right'>

                        <StudentData />

                    </div>
                </div>)
                }
            </div>



        </div>
    )
}

export default AdminHomePage