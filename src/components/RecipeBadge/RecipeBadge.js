import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Card, Badge, Button, Nav} from 'react-bootstrap';

const RecipeBadge = function({recipe, id}){
    
    let categories = recipe.categories.data.length > 0 ?  recipe.categories.data : [{attributes : {category : 'Sin Categoria'}}]
    console.log('categories',categories[0].attributes.category)
    return ( <Col md={4} xs={11} className='mt-4 '>
        <Card className='shadow'>
            <Card.Img style={{
width: '100%',
height: '160px',
objectFit: 'cover',
borderBottomLeftRadius: '0',
borderBottomRightRadius: '0'
}} src={recipe.thumbnail.data.attributes.url} />
            <Card.Body>
                <h6>{categories.map((category,id)=>
                <Link key={id} to={'/category/'+ category.attributes.category}> 
                    <Badge pill bg="primary" > {category.attributes.category}</Badge>
                </Link>
                )}
                </h6>
                <Card.Title style={{"overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","WebkitLineClamp":"2","WebkitBoxOrient":"vertical"}}>
                    <h5  style={{minHeight:'50px', height:'50px'}}>{recipe.title}</h5>
                    </Card.Title >
                <Card.Text style={{ "minHeight":"80px", "overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","WebkitLineClamp":"3","WebkitBoxOrient":"vertical"}}>
                {recipe.description}
                </Card.Text>
                <Link variant='secondary' to={`/recipe/${id}`}><Button variant="primary">Ver receta</Button></Link>
            </Card.Body>
        </Card>
    </Col>)
}

export default RecipeBadge;