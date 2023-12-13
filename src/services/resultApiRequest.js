
import axios from 'axios';
import authHeader from './auth-header';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });



const fetchAllResults = async () => {

    try {
        const response = await axiosInstance.get('/resultBase', {});
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const createNewResult = async ({ firstName, lastName, term, subject, score, grade, studentClass }) => {
    try {
        const result = await axiosInstance.post('/resultBase', { firstName, lastName, term, subject, score, grade, studentClass }, { headers: authHeader() });
        const data = await result;
        console.log(data)
        return result
    } catch (err) {
        console.log(err)
    }
}
const updateResult = async ({ id, firstName, lastName, term, subject, score, grade, studentClass }) => {
    try {
        const response = await axiosInstance.put('/resultBase', { id, firstName, lastName, term, subject, score, grade, studentClass }, { headers: authHeader() });
        console.log(response.data)
        return response
    } catch (err) {
        console.log(err)
    }
}
const deleteResult = async (id) => {
    try {
        console.log("id", id)
        const response = await axiosInstance.delete(`/resultBase/${id}`, { headers: authHeader() });
        return response
    } catch (err) {
        console.log(err)
    }
}
const fetchOneResult = async (_id) => {
    console.log("id", _id)
    try {
        const response = await axiosInstance.get(`/resultBase/${_id}`)
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}
const resultApiRequest = { fetchAllResults, createNewResult, updateResult, deleteResult, fetchOneResult }


export default resultApiRequest;

