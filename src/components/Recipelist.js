// Styles
import './Recipelist.css';

import React from 'react'
import { Link } from 'react-router-dom';
import TrashCan from '../assets/TrashCan.svg';
import { projectFirestore } from '../firebase/config';

export default function Recipe({recipes}) {

  if (recipes.length === 0) {
    return <div className='error'>No recipes found...</div>}

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (

    <div className='recipe-list'>
      {recipes.map( recipe => (
        <div key={recipe.id} className="card">
         <h3>{recipe.title}</h3>
         <p>{recipe.cookingTime} to make.</p>
         <div>{recipe.method.substring(0, 100)}</div>
         <Link to={`recipes/${recipe.id}`}>Cook This</Link>
         <img 
         src={TrashCan} 
         className="delete"
         alt='delete icon'
         onClick={ () => handleClick(recipe.id)}
           />
        </div>
        ))}
    </div>
  )
}
