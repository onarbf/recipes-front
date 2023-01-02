import React,{useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import RecipeBadge from '../RecipeBadge/RecipeBadge.js';

const RecipeList = function({search, setSearch, category}){

    const [recipes,setRecipes] = useState();
    const [isLoading,setIsLoading] = useState(true);

    //process.env.REACT_APP_API_URL + "/api/recipes?filters\[categories\][category][$contains]=clasicas"
    
    function getRecipeList(search, category){
        let query;
            if(!search && !category){
                query = process.env.REACT_APP_API_URL + "/api/recipes?populate=*"
            }else if(!category){
                query = process.env.REACT_APP_API_URL + "/api/recipes?filters[title][$contains]="+ search +"&populate=*"
            }else{
                query = process.env.REACT_APP_API_URL + "/api/recipes?filters[categories][category][$contains]=clasicas&populate=*"
                setSearch('');
            }
        fetch(query, { 
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
        if(search){
            category = '';
        }
        getRecipeList(search, category);
    },[search,category]);

    return (<Row className='d-flex  '>
        {recipes && recipes.map((recipe) =>
        <RecipeBadge key={recipe.id} id={recipe.id}
                  recipe={recipe.attributes} />
      )}
    </Row >);
}

export default RecipeList;