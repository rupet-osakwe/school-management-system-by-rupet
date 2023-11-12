import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

export const getAllResults = async (l) => {
    const res = await axiosInstance.get('/resultBase');

    console.log(res.data)
}