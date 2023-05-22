import axios from "../../../../../enviroments/enviroment-dev"
const findAll = () => {
    return axios.get(`menu/findPage`);
}

const loadImage = (fileName) => {
    return axios.get(`menu/file?`+ {fileName})
}

const loadListImages = (id) => {
    return axios.get(`menu/fileName/${id}` )
}

export {findAll,loadImage,loadListImages}