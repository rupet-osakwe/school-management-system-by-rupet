
const authHeader = () => {
    const token = localStorage.getItem('AccessToken');
    if (token) {
        try {
            const parsedToken = JSON.parse(token);
            return { Authorization: 'Bearer ' + parsedToken };
        } catch (error) {
            console.error("Error parsing Access Token:", error);
            return {};
        }
    } else {
        return {};
    }
}

export default authHeader;
