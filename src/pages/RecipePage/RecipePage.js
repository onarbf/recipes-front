import React, {useEffect, useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import RecipeCard from '../../components/RecipeCard/RecipeCard.js';
import AlertCard from '../../components/AlertCard/AlertCard.js';

const RecipePage = function(){
    const {id} = useParams();
    const [recipe,setRecipe] = useState();
    const [isLoading,setIsLoading] = useState(true);
    
    function getRecipeById(id){
        fetch(process.env.REACT_APP_API_URL+"/api/recipes/"+id+"?populate=*", { 
            method: 'get', 
            headers: {
                Authorization: 'Bearer '+ process.env.REACT_APP_API_TOKEN
              }
        })
        .then((response) => {
            if(response.status === 404){
                throw Error('Error')
            }
            console.log('works')
            return response.json();
        })  
	    .then(({data}) => {
            setIsLoading(false);
            setRecipe(data.attributes);

        }).catch((e)=>{
            setIsLoading(false);
            console.log(e);
        })
    }
    useEffect(()=>{
        getRecipeById(id);
        
    },[]);
    // 

    return (<Container>
            <Row className='d-flex justify-content-center'>
                <Col md={6} xs={11}>
                    {(!recipe && isLoading) && <AlertCard alertMessage='Loading recipe...'  alertVariant='secondary' />}
                    {(!recipe && !isLoading) && <AlertCard alertMessage='Cannot find your Recipe'  alertVariant='warning' />}
                    {(recipe && !isLoading) && <RecipeCard recipe={recipe}/>}
                </Col>
            </Row>
    </Container>)
}

export default RecipePage;