import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMenu from '../modal/ModalMenuDetail';
import { toast } from 'react-toastify';
import ImageSlider from '../silder/ImgSlider';
import ModalCheckRemove from '../modal/ModalCheckRemove';

const Menu = ({ id, name, price, imgUrl, description, menuData,menuList,data }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalCheck, setShowModalCheck] = useState(false);
  const [getImgUrl, setGetImgUrl] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const base64Image = await imgUrl();
      setGetImgUrl(base64Image);
    };
    fetchData();
  }, [imgUrl]);

  const hanldleUpdate = (event) => {
    event.preventDefault();
    setIsUpdate(true);
    menuData({ id, name, price, imgUrl, description, isUpdate: true })
  }

  const hanldleDelete = (event) => {
    event.preventDefault();
    setShowModalCheck(true);
  }
  const hanldleMenuDetail = (event) => {
    event.preventDefault();
    setShowModal(true);
  }

  return (
    <div>
      <Card style={{ width: '20rem', height: '27rem' }} className='m-4 '>
        <ImageSlider imageUrls={getImgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Giá: Chỉ từ {price - 10} - {price + 10}</p>
          </Card.Text>
          <div className='d-flex'>
            <div className='ms-2'>
              <Button
                variant="primary"
                onClick={(event) => hanldleMenuDetail(event)}>
                <i class="fas fa-info-circle"></i>
                &nbsp;Details</Button>
            </div>
            <div className='ms-2'>
              <Button variant="warning" onClick={(event) => hanldleUpdate(event)}>
                <i class="fas fa-edit"></i>&nbsp;Edit</Button>
            </div>
            <div className='ms-2'>
              <Button variant="danger" onClick={(event) => hanldleDelete(event)}>
                <i class="fas fa-trash"></i>&nbsp;Remove</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {showModal && (
        <ModalMenu
          id={id}
          name={name}
          price={price}
          imgUrl={imgUrl}
          description={description}
          show={showModal}
          onHide={() => setShowModal(false)}

        />
      )}
      {showModalCheck && (
        <ModalCheckRemove
          show={showModalCheck}
          onHide={() => setShowModalCheck(false)}
          id={id}
          name={name}
          afterRemove={menuList}
          data={data}
        ></ModalCheckRemove>
      )}
    </div>
  );
};

export default Menu;
