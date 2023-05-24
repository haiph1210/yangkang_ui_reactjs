import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const AddToCart = ({ id, name, price, imgUrl, description, show, onHide}) => {
  const savingOrder = () => {
    onHide();
    toast.success(`Đã thêm món ${name} vào giỏ hàng`);
  }
  return (
    <div>
      <Modal show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm Vào Giỏ Hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-success' onClick={savingOrder}
          >Đồng Ý</Button>
          <Button onClick={onHide}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddToCart
