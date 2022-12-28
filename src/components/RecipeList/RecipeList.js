import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Row} from 'react-bootstrap';
import RecipeBadge from '../RecipeBadge/RecipeBadge.js';

const RecipeList = function(props){
    const {category} = useParams();
    const [recipes,setRecipes] = useState();
    const [isLoading,setIsLoading] = useState(true);

    function getRecipeListByCategory(category){
        fetch("http://localhost:1337/api/recipes?populate=*", { 
            method: 'get', 
            headers: {
                Authorization: 'Bearer 7153db8942daa31caac098539d430ff78959c9ccbbba2a04f375d9362bfa4c0ee0937cf331519c4a3202a8b13559b73a6a1e027be1c697376291d44b394d4514643585c8e642d7d0d61e17c4f9e01811bc833ae56d28355143216552e56c0611da0e393316f4faca5c281b19d824ff77f2e3b4d5c3cc4326bb670d8feae00254'
              }
        })
        .then((response) => {
            if(response.status === 404){
                throw Error('Error')
            }
            return response.json();
        })  
	    .then(({data}) => {
            console.log(data);
            setIsLoading(false);
            setRecipes(data);

        }).catch((e)=>{
            setIsLoading(false);
            console.log(e);
        })
    }

    useEffect(()=>{
        getRecipeListByCategory(category);
        console.log('recipes:', recipes);
    },[]);

    return (<Row className='d-flex  '>
        {recipes && recipes.map((recipe) =>
        <RecipeBadge key={recipe.id} id={recipe.id}
                  recipe={recipe.attributes} />
      )}
    </Row >);
}

export default RecipeList;