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
    
    projectFirestore.collection('recipes').doc(id).get().then( (document) => {
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
         <p>Takes {recipes["cooking time"]} to make</p>
         <ul>
           {recipes.ingredients.map( ing => 
            <li key={ing}>{ing}</li>)
           }
         </ul>
         <p className='method'>{recipes.method}</p>
        
        </>
      )}
    </div>
  )
}

export default Recipe