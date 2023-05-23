import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../entity/Menu';
import { findAll, loadListImages } from '../service/MenuService';
import FilterMenu from '../filter/SearchMenu';
import ModalRequest from '../modal/ModalRequest';
const ListMenus = () => {
    // const URL_LOAD_IMAGE_TOBASE64 = "http://localhost:8000/api/menu/fileName/"
    const [imgUrls, setImgUrls] = useState("");
    const [menus, setMenus] = useState([]);
    const [filteredMenus, setFilteredMenus] = useState([]);
    const [saveMenuToUpdate,setSaveMenuToUpdate] = useState(null);
    const getAllMenus = async () => {
        const res = await findAll();
        setMenus(res.responseData);
        setFilteredMenus(res.responseData.content);
    };


    const getAllBase64Image = async (id) => {
        const res = await loadListImages(id);
        if(res) {
            const bodies = res.map((item) => item.body);
            return bodies;
        }else{
            return "1";
        }
    };

    const handleFilter = (filter) => {
        const updatedFilteredMenus = filter;
        setFilteredMenus(updatedFilteredMenus);
        console.log(filteredMenus);
    }

    const handleAffterAdd = () => {
        getAllMenus();
        console.log("hi");
    }

    const hanldeSaveDataToUpdate = (menuData) =>{
        const data = menuData;
        setSaveMenuToUpdate(data);
    }

    useEffect(() => {
        getAllMenus();
    }, []);

    return (
        <Container className='' >
            <FilterMenu
                listMenus={menus.content}
                afterFilter={handleFilter}
            ></FilterMenu>
            <ModalRequest
            afterAdd={handleAffterAdd}
            menuData={saveMenuToUpdate}
            ></ModalRequest>
            <Row xs={1} md={3} className="g-sm-4 border mt-3 ms-0 me-0 handle-row">
                {filteredMenus &&
                    filteredMenus.length > 0 &&
                    filteredMenus.map((item, index) => (
                        <Col key={"Menu" +index}>
                            <Menu
                                id = {item.id}
                                name={item.name}
                                price={item.price}
                                imgUrl={() => getAllBase64Image(item.id)}
                                description={item.description}
                                menuData={hanldeSaveDataToUpdate}
                            />
                        </Col>
                    ))}
            </Row>

        </Container>
    );
};

export default ListMenus;
