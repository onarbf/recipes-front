import React from "react";
import {Container, Row, Col,} from 'react-bootstrap';
import RecipeList from "../../components/RecipeList/RecipeList";

const HomePage = function(){
    return <Container className='Home'>
        <Row className='d-flex justify-content-center'>
            <Col md={6} xs={11} className='text-center'>
                <h1>Últimas recetas</h1>
            </Col>
         </Row>

         <Row className='d-flex justify-content-center'>
            <Col md={8} xs={11}>
                <RecipeList />
            </Col>
         </Row>
    </Container>
}

export default HomePage;