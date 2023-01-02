import React from "react";
import {useParams} from 'react-router-dom';
import {Container, Row, Col,} from 'react-bootstrap';
import RecipeList from "../../components/RecipeList/RecipeList";

import ContextData from "../../handlers/context.js";

const SearchPage = function(){
    let {category} = useParams()
    const {search, setSearch} = React.useContext(ContextData);

    let title = '' || search;
    title = title ? title : category;
    
    return (<Container className='Home'>
        <Row className='d-flex justify-content-center'>
            <Col md={6} xs={11} className='text-center'>
                <h1>Estos son las recetas encontradas para "{title}":</h1>
            </Col>
         </Row>

         <Row className='d-flex justify-content-center'>
            <Col md={8} xs={11}>
                <RecipeList search={search} setSearch={setSearch} category={category}/>
            </Col>
         </Row>
    </Container>)
}

export default SearchPage;