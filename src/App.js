
import { useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
import { AdminAuth } from './components/adminLogIn';
import StaffAuth from './components/staffLogIn';
import StudentAuth from './components/studentLogIn';
import UploadResult from './components/registration/createResult';
import UploadNewStudent from './components/registration/createStudent';
import UploadNewStaff from './components/registration/createStaff';
import RequestResults from './components/readOperations/fetchResults';
import RequestStudents from './components/readOperations/fetchStudents';
import RequestStaffs from './components/readOperations/fetchStaffs';
import UpdateResultContent from './components/updateOperations/updateResult';
import UpDateStaff from './components/updateOperations/updateStaff';
import UpdateStudent from './components/updateOperations/updateStudent';
import DeleteStaff from './components/deleteOperations/deleteStaff';
import DeleteStudent from './components/deleteOperations/deleteStudent';
import DeleteResult from './components/deleteOperations/deleteResult';
import FetchOneStudent from './components/fetchOneOps/fetchOneStudent';
import FetchOneResult from './components/fetchOneOps/fetchOneResult';
import FetchOneStaff from './components/fetchOneOps/fetchOneStaff';
import Home from './components/homePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminHomePage from './components/homes/adminHomePage';
import Admin from './gates/admin';
import Staff from './gates/staff';
import Student from './gates/students';
import StaffHomePage from './components/homes/staffHomePage'
import StudentHomePage from './components/homes/studentHomePage';
function App(props) {

  // useEffect(() => {
  //   fetchAllStaff()
  // }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navBar'>
          {/* <Link to="/" className='link'>Home Page</Link>
          <Link to="/Admin">Admin</Link>
          <Link to="/AdminHomePage">Admin's Page</Link>
          <Link to="/StaffLogin">staffLogIn</Link>
          <Link to="/StudentLogin">StudentLogin</Link>
          <Link to="/ResultUpload">ResultUpload</Link>
          <Link to="/StudentReg">StudentReg</Link>
          <Link to="/StaffReg">StaffReg</Link>
          <Link to="/ResultsCheck">CheckResults</Link>
          <Link to="/StudentInfos">StudentInfo</Link>
          <Link to="/StaffDetails">StaffInfo</Link>
          <Link to="/UpdateResult">UpdateResult</Link>
          <Link to="/UpdateStaffDetails">UpdateStaffDetails</Link>
          <Link to="/UpdateStudentDetails">UpdateStudentDetails</Link>
          <Link to="/DeleteStaff">DeleteStaff</Link>
          <Link to="/DeleteStudent">DeleteStudent</Link>
          <Link to="/DeleteResult">DeleteResult</Link>
          <Link to="/check-a-result">check-a-result</Link>
          <Link to="/CheckAStudentData">CheckAStudentData</Link>
          <Link to="/CheckAStaffData">CheckAStaffData</Link>
          <Link to="StaffHomePage">Staff Home</Link> */}
          {/* <Link to='AdminCredentials'>AdminCredentials</Link> */}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Admin' element={<AdminAuth />} />
          <Route path='adminHomePage/*' element={<AdminHomePage />} />
          <Route path='/StaffLogin' element={<StaffAuth />} />
          <Route path='/StudentLogin' element={<StudentAuth />} />
          <Route path='/ResultUpload' element={<UploadResult />} />
          <Route path='/StudentReg' element={<UploadNewStudent />} />
          <Route path='/StaffReg' element={<UploadNewStaff />} />
          <Route path='/ResultsCheck' element={<RequestResults />} />
          <Route path='/StudentInfos' element={<RequestStudents />} />
          <Route path='/StaffDetails' element={<RequestStaffs />} />
          <Route path='/UpdateResult' element={<UpdateResultContent />} />
          <Route path='/UpdateStaffDetails' element={<UpDateStaff />} />
          <Route path='/UpdateStudentDetails' element={<UpdateStudent />} />
          <Route path='/DeleteStaff' element={<DeleteStaff />} />
          <Route path='/DeleteStudent' element={<DeleteStudent />} />
          <Route path='/DeleteResult' element={<DeleteResult />} />
          <Route path='/CheckAStudentData' element={<FetchOneStudent />} />
          <Route path='/check-a-result' element={<FetchOneResult />} />
          <Route path='/CheckAStaffData' element={<FetchOneStaff />} />
          <Route path='StaffHomePage/*' element={<StaffHomePage />} />
          <Route path='StudentHomePage/*' element={<StudentHomePage />} />
          <Route path='*' element={<h3>PAGE NOT FOUND</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;