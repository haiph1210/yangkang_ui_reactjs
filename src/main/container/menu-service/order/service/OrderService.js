import axios from "../../../../../enviroments/enviroment-dev"
const findAllOrder = (page) => {
    return axios.get(`/order/findAll?page=${page}`);
} 

const findAllOrderByUserCode = (userCode) => {
    return axios.get(`/order/findAllByUserCode/${userCode}`);
} 
const createOrder = (personCode,idMenus,idCombos,idCarts,idForms,people,hour,description,type) => {
    return axios.post(`/order/create`,{personCode,idMenus,idCombos,idCarts,idForms,people,hour,description,type});
}

const updateOrder = (id,personCode,idMenus,idCombos,idCarts,idForms,people,hour,description,type) => {
    return axios.post(`/order/update/${id}`,{personCode,idMenus,idCombos,idCarts,idForms,people,hour,description,type});
}

const deleteOrder = (id) => {
    return axios.post(`/order/delete/${id}`);
}

const updateOrderApproved = (id) => {
    return axios.put(`/order/updateApproved/${id}`);
}

const updateOrderRefuse = (id) => {
    return axios.put(`/order/updateRefuse/${id}`);
}

export {findAllOrder,findAllOrderByUserCode,createOrder,updateOrder,deleteOrder,updateOrderApproved,updateOrderRefuse}