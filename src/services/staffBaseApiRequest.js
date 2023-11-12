
import axios from "axios";
import authHeader from "./auth-header";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const fetchAllStaff = async () => {
    try {
        const response = await axiosInstance.get('/staffBase', { headers: authHeader() });
        console.log('All Staffs', response);
        return response.data
    } catch (err) {
        throw err
    }
}
const createNewStaff = async ({ userName,
    email,
    firstName,
    lastName,
    password,
    gender,
    designation,
    maritalStatus,
    phoneNumber }) => {
    try {
        const response = await axiosInstance.post('/staffBase', {
            userName,
            email,
            firstName,
            lastName,
            password,
            gender,
            designation,
            maritalStatus,
            phoneNumber
        }, { headers: authHeader() });
        console.log(response)
        return response
    } catch (err) {
        console.log(err.message)
    }
}
const logIn = async (userName, email) => {
    try {
        const response = await axiosInstance.post('/staffLogin', { userName, email });
        localStorage.setItem('AccessToken', JSON.stringify(response.data.AccessToken))
        console.log('response', response)
        return response
    } catch (err) {
        console.log(err)
    }
}
const updateStaff = async ({ id, userName,
    email,
    firstName,
    lastName,
    password,
    gender,
    designation,
    maritalStatus }) => {
    try {
        const response = await axiosInstance.put('/staffBase', { id, userName, email, firstName, lastName, password, gender, designation, maritalStatus }, { headers: authHeader() });
        return response
    } catch (err) {
        console.log(err)
    }
}
const deleteStaff = async (id) => {
    try {
        const response = await axiosInstance.delete(`/staffBase/${id}`, { headers: authHeader() });
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
const fetchOneStaff = async (id) => {
    try {
        console.log('id', id)
        const response = await axiosInstance.get(`/staffBase/${id}`, { headers: authHeader() })

        console.log(response)
        return response
    } catch (err) {
        console.log(err)
        throw (err)
    }
}

const staffBaseApi = { fetchAllStaff, createNewStaff, logIn, updateStaff, deleteStaff, fetchOneStaff }

export default staffBaseApi 