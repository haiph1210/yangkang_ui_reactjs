import axios from "../../../../enviroments/enviroment-dev"
const APILogin = (username, password) => {
    return axios.post('authenticate/login', { username, password });
}

export {APILogin}