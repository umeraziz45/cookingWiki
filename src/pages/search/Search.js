import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch (1)';

// Import Style
import './Search.css'

import Recipelist from '../../components/Recipelist';

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Recipes Including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Is Loading...</p>}
      {data && <Recipelist recipes={data} />}
    </div>
  )
}

export default Search