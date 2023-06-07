import React from 'react'
import { useState } from 'react'
import AddToCart from '../../menu/modal/AddToCart';
import { deleteCart } from '../service/CartService';
import ModalCheckRemoveCart from '../modal/ModalCheckRemoveCart';

const Cart = ({ stt, id, code, nameResponse, imgResponse, price, amount, initPrice, createDate,loadData }) => {
    const [updateCart,setUpdateCart] = useState(false);
    const [deleteCart,setDeleteCart] = useState(false);
    const handleUpdateCart = () => {
        setUpdateCart(true);
    }


    const handleDeleteCart = () => {
        setDeleteCart(true);
    }
    return (
        <tr key={id}>
            <td><input type='checkbox' /></td>
            <td hidden={true}>{id}</td>
            <td>{stt}</td>
            <td>{code}</td>
            <td>{nameResponse}</td>
            <td><img src={`data:image/jpeg;base64,${imgResponse}`} alt={nameResponse} /></td>
            <td>{price}</td>
            <td>{amount}</td>
            <td>{initPrice}</td>
            <td>{createDate}</td>
            <td className='d-flex justify-content-center'>
                <button
                    className='btn btn-warning ms-2'
                    onClick={handleUpdateCart}
                    >
                    <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit</button>
                <button
                    className='btn btn-danger ms-2'
                    onClick={handleDeleteCart}
                    >
                    <i class="fa-regular fa-trash-can"></i>&nbsp;Delete</button>
            </td>
            {updateCart &&(
            <AddToCart
            isUpdate={true}
            id= {id}
            name={nameResponse}
            code={code} 
            show={updateCart}
            onHide={() => setUpdateCart(false)}
            loadData={loadData}
            />
            )}
            {deleteCart && (
            <ModalCheckRemoveCart
            id={id}
            show={deleteCart}
            onHide={() => setDeleteCart(false)}
            loadData={loadData}
            />
            )}
        </tr>
        
    )
}

export default Cart

