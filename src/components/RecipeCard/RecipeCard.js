import React from 'react';
import ReactMarkdown from "react-markdown";
import {Card, Container, Row, Col} from 'react-bootstrap';
const RecipeCard = function({recipe}){
    console.log(recipe.ingredients);
    return( <div>
    <Card className="RecipeCard border-0 shadow">
    <Card.Img variant="top" src={'http://localhost:1337'+ recipe.thumbnail.data.attributes.url} />
    <Card.Body>
        <Row>
            <Col>
            <Card.Title>
            <h1>{recipe.title}</h1>
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
        <ReactMarkdown className='mt-5'>{recipe.content}</ReactMarkdown>
    </div>)
}

export default RecipeCard;