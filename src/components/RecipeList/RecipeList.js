import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Row} from 'react-bootstrap';
import RecipeBadge from '../RecipeBadge/RecipeBadge.js';

const RecipeList = function(props){
    const {category} = useParams();
    const [recipes,setRecipes] = useState();
    const [isLoading,setIsLoading] = useState(true);
    //process.env.REACT_APP_API_URL + "/api/recipes?filters[title][$contains]=Tor&populate=*"
    function getRecipeListByCategory(category){
        fetch(process.env.REACT_APP_API_URL + "/api/recipes?populate=*", { 
            method: 'get', 
            headers: {
                Authorization: 'Bearer '+ process.env.REACT_APP_API_TOKEN
              }
        })
        .then((response) => {
            if(response.status === 404){
                throw Error('Error')
            }
            return response.json();
            
        })  
	    .then(({data}) => {
            setIsLoading(false);
            setRecipes(data);

        }).catch((e)=>{
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        getRecipeListByCategory(category);
    },[]);

    return (<Row className='d-flex  '>
        {recipes && recipes.map((recipe) =>
        <RecipeBadge key={recipe.id} id={recipe.id}
                  recipe={recipe.attributes} />
      )}
    </Row >);
}

export default RecipeList;