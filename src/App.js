
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
import StaffHomePage from './components/homes/staffHomePage'
import StudentHomePage from './components/homes/studentHomePage';
import StudentData from './components/user-data/student-data';
import FetchOneStudentData from './components/fetchOneOps/studentBio';
import { MessageOnDelete } from './services/messages/deleteStudentMessage';
import FetchOneStaffData from './components/fetchOneOps/staffBio';
function App() {
  return (
    <div className="App">

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
        <Route path='/DeleteStudent/:_id' element={<DeleteStudent />} />
        <Route path='/DeleteResult' element={<DeleteResult />} />
        <Route path='/CheckAStudentData' element={<FetchOneStudent />} />
        <Route path='/check-a-result' element={<FetchOneResult />} />
        <Route path='/CheckAStaffData' element={<FetchOneStaff />} />
        <Route path='StaffHomePage/*' element={<StaffHomePage />} />
        <Route path='StudentHomePage/*' element={<StudentHomePage />} />
        <Route path='/student-data' element={<StudentData />} />
        <Route path="/student-BioData/:_id" element={<FetchOneStudentData />} />
        <Route path="/staff-BioData/:_id" element={<FetchOneStaffData />} />
        <Route path="/Delete-message" element={<MessageOnDelete />} />
        <Route path='*' element={<h3>404 PAGE NOT FOUND</h3>} />
      </Routes>
    </div>
  );
}

export default App;