import React from "react";
import axios from "axios";
import authHeader from "./auth-header";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const fetchAllStudents = async () => {
    try {
        const response = await axiosInstance.get('/studentBase')
        console.log('Student Info', response.data);
        return response.data
    } catch (err) {
        console.log(err)
    }
};
const createNewStudent = async ({ userName, email, firstName, lastName, dateOfBirth, studentClass, gender, fathersName, fathersPhoneNumber, mothersName, mothersPhoneNumber, homeAddress }) => {
    try {
        const response = await axiosInstance.post('/studentBase', { userName, email, firstName, lastName, dateOfBirth, studentClass, gender, fathersName, fathersPhoneNumber, mothersName, mothersPhoneNumber, homeAddress }, { headers: authHeader() });
        return response
    } catch (err) {
        console.log(err)
    }
}
const logIn = async (userName, email) => {
    try {
        const response = await axiosInstance.post('/studentLogIn', { userName, email });
        localStorage.setItem('AccessToken', JSON.stringify(response.data.AccessToken));
        console.log('response', response)
        return response
    } catch (err) {
        console.log(err)
    }
}
const updateStudent = async ({ id, userName, email, firstName, lastName, dateOfBirth, studentClass, gender, fathersName, fathersPhoneNumber, mothersName, mothersPhoneNumber, homeAddress }) => {
    try {
        const response = await axiosInstance.put('/studentBase', { id, userName, email, firstName, lastName, dateOfBirth, studentClass, gender, fathersName, fathersPhoneNumber, mothersName, mothersPhoneNumber, homeAddress }, { headers: authHeader() });
        return response;
    } catch (err) {
        console.log(err)
    }
}
const deleteStudent = async (id) => {
    const response = await axiosInstance.delete(`/studentBase/${id}`, { headers: authHeader() })
    return response
}
const fetchOneStudent = async (id) => {
    try {
        const response = await axiosInstance.get(`/studentBase/${id}`)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
const studentApiRequest = { fetchAllStudents, createNewStudent, logIn, updateStudent, deleteStudent, fetchOneStudent }

export default studentApiRequest