import React from 'react'
import { Table } from 'react-bootstrap'
import Cart from '../entity/Cart'
import { useState } from 'react'
import { findAllCart } from '../service/CartService'
import { useEffect } from 'react'
import { findAll, getAllBase64Image } from '../../menu/service/MenuService'
import { useSelector } from 'react-redux'
import { SelectTokenResponse } from '../../../auth-service/redux/AuthSelector'
import '../component/ListCart.scss'
const ListCart = () => {
    const [listCart, setListCart] = useState([]);
    const tokenRespone = useSelector(SelectTokenResponse);
    const getAllCart = async (page) => {
        try {
            const res = await findAllCart(page);
            console.log(res);
            if (res && res.data.responseData)
                setListCart(res.data.responseData.content);
        } catch (error) {
            console.log(error);
        }
    };

    const loadData = () => {
        getAllCart();
    }

    useEffect(() => {
        getAllCart(1);
    }, [])

    return (
        <div>
            <div className='config-title'>Cart User <i>{tokenRespone.user.fullName}</i> </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>STT</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>InitPrice</th>
                        <th>CreateDate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listCart.map((item, index) => {
                        return (
                            <Cart
                                key={index}
                                stt={index+1}
                                id={item.id}
                                code={item.code}
                                nameResponse={item.response.name}
                                imgResponse={() => getAllBase64Image(item.response.id)}
                                price={item.price}
                                amount={item.amount}
                                initPrice={item.initPrice}
                                createDate={item.createDate}
                                loadData={loadData}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ListCart
