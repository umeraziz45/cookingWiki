import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';

// Import Style
import './Recipe.css';

function Recipe( ) {

  const { id } = useParams();

  const [recipes, setRecipes] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending ] = useState(false);

  useEffect( () => {
    setIsPending(true);
    
    projectFirestore.collection('recipes').doc(id).onSnapshot( (document) => {
      if(document.exists === true){
        setIsPending(false);
        setRecipes(document.data());
      } else {
        setIsPending(false);
        setError('could not find recipe');
      }
    }) 


  }, [id])

  return (
    <div className="recipe">
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div className='error'>{error}</div>}
      {recipes && (
        <>
         <h2 className='page-title'>{recipes.title}</h2>
         <p className='page-sub-title'>Takes {recipes.cookingTime} to make</p>
         <ol className='ingredient-list'>
           {recipes.ingredients.map( ing => 
            <li key={ing}>{ing}</li>)
           }
         </ol>
         <p className='method'>{recipes.method}</p>
        
        </>
      )}
    </div>
  )
}

export default Recipe