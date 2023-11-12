import React from "react";
import { useState } from "react";
import staffBaseApi from "../../services/staffBaseApiRequest";
import Heading from "../header";
const requestUrl = staffBaseApi.deleteStaff;

const DeleteStaff = () => {
    const [staffId, setStaffId] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDelete = async () => {
        try {
            const data = await requestUrl(staffId)
            if (data) {
                setMessage(`You deleted the staff with the ID ${staffId}  successfully`)
            }

            return;
        } catch (err) {
            setTimeout(() => setErrorMessage(err.message), 2000);
            console.log(err)
        }
    }
    const handleChange = (event) => {
        setStaffId(event.target.value)
        return
    }
    return (
        <div>
            <Heading />
            {errorMessage ? (<div className="errorMessage" >{errorMessage}</div>) : ("")}
            {message ? (<div className="deleted-data-message response-message">{message}</div>) : (<div><div className="deleteStaff-input">
                <h5 className="input-name">Delete Staff</h5>

                <input type="text" placeholder="Staff ID" onChange={handleChange} />
                <button className="deleteButton" onClick={handleDelete} >Delete</button>
            </div ></div>)}



        </div>
    )
}
export default DeleteStaff