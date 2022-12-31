import React from 'react';
import ReactMarkdown from "react-markdown";
import {Card, Container, Row, Col} from 'react-bootstrap';
import './RecipeCard.css';

const RecipeCard = function({recipe}){
    return( <div>
    <Card className="RecipeCard border-0 shadow">
    <Card.Img variant="top" src={recipe.thumbnail.data.attributes.url} />
    <Card.Body>
        <Row>
            <Col>
            <Card.Title >
            <h1 >{recipe.title}</h1>
            </Card.Title>
            </Col>
        </Row>
        <Container>
            <Row>
                <Col xs={8}>
                <h5>Ingredientes</h5>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <h5>{recipe.minutes} min</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{whiteSpace: "pre-line"}}>{recipe.ingredients}</p>
                </Col>
            </Row>
            
        </Container>
    </Card.Body>

    </Card>
        <ReactMarkdown className='mt-5 recipeCardContent'>{recipe.content}</ReactMarkdown>
    </div>)
}

export default RecipeCard;