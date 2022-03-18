import { useFetch } from '../../hooks/useFetch (1)';

// Import Components
import Recipe from '../../components/Recipelist';

// Import Style
import './Home.css';

function Home() {

  const { data, isPending, error } = useFetch('https://my-json-server.typicode.com/umeraziz45/recipe-wiki-db/recipes');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {data && <Recipe recipes={data} />}
    </div>
  )
}

export default Home
