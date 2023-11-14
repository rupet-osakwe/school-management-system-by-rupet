import React from "react";
import axios from "axios";
import authHeader from "./auth-header";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const adminLogin = async (userName, password, email) => {
    try {
        const response = await axiosInstance.post('/AdminLogin', { userName, password, email }, { headers: authHeader() })
        const AccessToken = response.data.AccessToken
        localStorage.setItem('AccessToken', JSON.stringify(AccessToken));
        console.log('response', response)
        return response

    } catch (err) {
        console.log(err)
    }
}
export default adminLogin