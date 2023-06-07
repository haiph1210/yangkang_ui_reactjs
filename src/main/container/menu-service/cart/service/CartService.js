import axios from "axios"

const URL = "http://localhost:8000/api/cart/"
const findAllCart = (page) => {
    return axios.get(URL+`findPage?page=${page}`);
}
const total = () => {
    return axios.get(URL+`total`);
}
const createCart = (code,amount) => {
    return axios.post(URL + "create",{code,amount})
}

const updateCart = (id,code,amount) => {
    return  axios.put(URL + `update/${id}`,{code,amount})
}

const deleteCart = (id) => {
    return axios.delete(URL + `delete/${id}`)
}

const findAllCartPage = (page) => {
    return axios.get(URL+`findPage?page=${page}`).then(data => data);
}
export{findAllCart,createCart,updateCart,deleteCart,total,findAllCartPage}
