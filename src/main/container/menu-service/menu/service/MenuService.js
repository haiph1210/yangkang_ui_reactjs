import axios from "../../../../../enviroments/enviroment-dev"
const findAll = () => {
    return axios.get(`menu/findPage`);
}
const loadListImages = (id) => {
    return axios.get(`menu/fileName/${id}`)
}
const findForm = (minPrice, maxPrice) => {
    return axios.post(`menu/search-form`, { minPrice, maxPrice })
}

const createMenu = (name, price, description, imgUrls) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    for (let i = 0; i < imgUrls.length; i++) {
        formData.append("imgUrl", imgUrls[i]);
    }

    return axios.post(`menu/create`, formData, {
        headers: {
            "Content-Type": "form-data",
        },
    })
}

const updateMenu = (id, name, price, description, imgUrls) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    for (let i = 0; i < imgUrls.length; i++) {
        formData.append("imgUrl", imgUrls[i]);
    }
    return axios.put(`menu/update/${id}`, formData, {
        headers: {
            "Content-Type": "form-data",
        }
    })
}

const deleteMenu = (id) => {
    return axios.delete(`menu/delete/${id}`);
}
export { findAll, loadListImages, findForm, createMenu, updateMenu, deleteMenu }