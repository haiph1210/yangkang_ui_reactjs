import axios from "axios"

// import axios from '../../../../../enviroments/enviroment-dev'
const URL = "http://localhost:8001/api/user/"

const findAllUser = (page) => {
    return axios.get(URL+`findPage?page=${page}`);
}

const findByUserCode = (userCode) => {
    return axios.get(URL+`userCode/${userCode}`)
}

export {findAllUser,findByUserCode}