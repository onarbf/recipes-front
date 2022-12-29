import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Card, Button, Nav} from 'react-bootstrap';

const RecipeBadge = function({recipe, id}){
    console.log(recipe)
    return ( <Col md={4} xs={11} className='mt-4 '>
        <Card className='shadow'>
            <Card.Img style={{
width: '100%',
height: '160px',
objectFit: 'cover',
borderBottomLeftRadius: '0',
borderBottomRightRadius: '0'
}} src={process.env.REACT_APP_API_URL + recipe.thumbnail.data.attributes.url} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text style={{"overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","WebkitLineClamp":"3","WebkitBoxOrient":"vertical"}}>
                {recipe.description}
                </Card.Text>
                <Link variant='secondary' to={`/recipe/${id}`}><Button variant="primary">Ver receta</Button></Link>
            </Card.Body>
        </Card>
    </Col>)
}

export default RecipeBadge;