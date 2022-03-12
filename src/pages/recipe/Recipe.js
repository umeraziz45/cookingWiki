import { useFetch } from '../../hooks/useFetch (1)';
// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import Style
import './Recipe.css';

function Recipe( ) {

  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;

  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div className='error'>{error}</div>}
      {recipes && (
        <>
         <h2 className='page-title'>{recipes.title}</h2>
         <p>Takes {recipes.cookingTime} to make</p>
         <ul>
           {recipes.ingredients.map( ing => <li key={ing}>{ing}</li>)}
         </ul>
         <p className='method'>{recipes.method}</p>
        
        </>
      )}
    </div>
  )
}

export default Recipe