import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../entity/Menu';
import { findAll, loadListImages } from '../service/MenuService';

const ListMenus = () => {
    // const URL_LOAD_IMAGE_TOBASE64 = "http://localhost:8000/api/menu/fileName/"
    const [imgUrls, setImgUrls] = useState("");
    const [menus, setMenus] = useState([]);

    const getAllMenus = async () => {
        const res = await findAll();
        setMenus(res.responseData);
    };

    console.log(imgUrls);

    const getAllBase64Image = async (id) => {
        const res = await loadListImages(id);
        const bodies = res.map((item) => item.body);
        console.log("Hải,",bodies);
        return bodies;
    };

    useEffect(() => {
        getAllMenus();
    }, []);

    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {menus.content &&
                    menus.content.length > 0 &&
                    menus.content.map((item, index) =>
                        <Col key={index}>
                            <Menu
                                name={item.name}
                                price={item.price}
                                imgUrl={() => getAllBase64Image((item.id))}
                                description={item.description}
                            />
                        </Col>
                    )}
            </Row>
        </Container>
    );
};

export default ListMenus;
