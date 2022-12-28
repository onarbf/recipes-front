import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import RecipeCard from '../../components/RecipeCard/RecipeCard.js';
import AlertCard from '../../components/AlertCard/AlertCard.js';

const RecipePage = function(){
    const {id} = useParams();
    const [recipe,setRecipe] = useState();
    const [isLoading,setIsLoading] = useState(true);

    function getRecipeById(id){
        fetch("http://localhost:1337/api/recipes/"+id+"?populate=*", { 
            method: 'get', 
            headers: {
                Authorization: 'Bearer 7153db8942daa31caac098539d430ff78959c9ccbbba2a04f375d9362bfa4c0ee0937cf331519c4a3202a8b13559b73a6a1e027be1c697376291d44b394d4514643585c8e642d7d0d61e17c4f9e01811bc833ae56d28355143216552e56c0611da0e393316f4faca5c281b19d824ff77f2e3b4d5c3cc4326bb670d8feae00254'
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