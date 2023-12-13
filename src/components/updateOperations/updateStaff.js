import React from "react";
import { useState } from "react";
import staffBaseApi from "../../services/staffBaseApiRequest";
import Heading from "../header";



const UpDateStaff = () => {
    const [staffDetails, setStaffDetails] = useState({
        id: "",
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        gender: "",
        designation: "",
        maritalStatus: "",
        phoneNumber: ""
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleUpdate = async () => {
        try {
            const requestUrl = staffBaseApi.updateStaff({ ...staffDetails });
            const request = await requestUrl;
            if (request) {
                const data = request;
                setMessage('Staff information  Successfully Updated, Check registered email for details.');
                console.log('response', data)
                return data
            }
            return
        } catch (err) {
            console.log(err)
            setTimeout(() => setErrorMessage('Could Not Update staff information  Successfully, Seems There Was A problem updating the staff details!', err.message), 2000);
        }
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStaffDetails({ ...staffDetails, [name]: value });
    };
    return (
        <div>
            <Heading />
            {message ? (<div className="message">{message}</div>) : (<div className="staff-update-inputs">
                <h5 className="input-name">Update Staff Details</h5>
                <input type="text" placeholder="ID" name="id" value={staffDetails.id} onChange={handleChange} />
                <input type="text" placeholder="Change User Name" name="userName" value={staffDetails.userName} onChange={handleChange} />
                <input type="email" placeholder="Change Email" name="email" value={staffDetails.email} onChange={handleChange} />
                <input type="text" placeholder=" ChangeFirst Name" name="firstName" value={staffDetails.firstName} onChange={handleChange} />
                <input type="text" placeholder="Change Last Name" name="lastName" value={staffDetails.lastName} onChange={handleChange} />
                <input type="text" placeholder="Change Password" name="password" value={staffDetails.password} onChange={handleChange} />
                <input type="text" placeholder="Change Gender" name="gender" value={staffDetails.gender} onChange={handleChange} />
                <input type="text" placeholder="Change Designation" name="designation" value={staffDetails.designation} onChange={handleChange} />
                <input type="text" placeholder="Change Marital Status" name="maritalStatus" value={staffDetails.maritalStatus} onChange={handleChange} />
                <input type="tel" placeholder="Change Phone Number" name="phoneNumber" value={staffDetails.phoneNumber} onChange={handleChange} />
                <button className="uploadButton" onClick={handleUpdate}>Update</button>
            </div >)}
            {errorMessage ? (<div className="errorMessage">{errorMessage}</div>) : ("")}
        </div>
    )
}
export default UpDateStaff
