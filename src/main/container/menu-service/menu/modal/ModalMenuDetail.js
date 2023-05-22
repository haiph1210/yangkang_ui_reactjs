import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const ModalMenu = ({ id, name, price, imgUrl, description, show, onHide }) => {
  const [getImgUrl, setGetImgUrl] = useState("");
  const savingOrder = () => {
    onHide();
    toast.success(`Đã thêm món ${name} vào giỏ hàng`);
  }
  useEffect(() => {
    const fetchData = async () => {
      const base64Image = await imgUrl();
      setGetImgUrl(base64Image);
    };

    fetchData();
  }, [imgUrl]);

  console.log("handle", getImgUrl);
  return (
    <div>
      <Modal show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thông Tin Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-around'>
            <div className="d-flex flex-column">
              {Array.isArray(getImgUrl) && getImgUrl.map((imgUrl, index) => (
                <img
                  key={index}
                  src={`data:image/jpeg;base64,${imgUrl}`}
                  alt={`Image ${index + 1}`}
                  width={"350px"} 
                  height={"200px"}
                  style={{ marginBottom: "10px" }}
                />
              ))}
            </div>
            <div className='d-flex flex-column'>
              <h4>{name}</h4>
              <p>Giá của sản phẩm: {price} vnđ</p>
              <p>Thông Tin Sản Phẩm: {description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-success' onClick={savingOrder}
          >Thêm Vào Giỏ Hàng</Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalMenu
