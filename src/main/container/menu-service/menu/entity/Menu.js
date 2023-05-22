import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMenu from '../modal/ModalMenuDetail';
import { toast } from 'react-toastify';
import ImageSlider from '../silder/ImgSlider';

const Menu = ({ id, name, price, imgUrl, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [getImgUrl, setGetImgUrl] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const base64Image = await imgUrl();
      setGetImgUrl(base64Image);
    };

    fetchData();
  }, [imgUrl]);


  const hanlleMenuDetail = (event) => {
    event.preventDefault();
    setShowModal(true);
  }


  // useEffect(() => {
  //   let intervalId;

  //   const fetchData = async () => {
  //     const base64Images = await imgUrl();
  //     setGetImgUrl(base64Images);
  //     setCurrentImageIndex(0); // Set ảnh đầu tiên là ảnh hiển thị ban đầu
  //   };

  //   fetchData();

  //   if (getImgUrl.length > 1) {
  //     intervalId = setInterval(() => {
  //       setCurrentImageIndex((prevIndex) => {
  //         const nextIndex = prevIndex + 1;
  //         return nextIndex >= getImgUrl.length ? 0 : nextIndex;
  //       });
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [imgUrl]);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <ImageSlider imageUrls={getImgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Giá: Chỉ từ {price - 10} - {price + 10}</p>
          </Card.Text>
          <Button variant="primary" onClick={(event) => hanlleMenuDetail(event)}>Chi Tiết Sản Phẩm</Button>
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
    </div>
  );
};

export default Menu;
