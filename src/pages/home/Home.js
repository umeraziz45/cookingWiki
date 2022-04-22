import { projectFirestore } from '../../firebase/config';
import { useEffect } from 'react';
import { useState } from 'react';

// Import Components
import Recipe from '../../components/Recipelist';

// Import Style
import './Home.css';

function Home() {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect( () => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').onSnapshot( (snapshot) => {
      console.log(snapshot);
      if(snapshot.empty === true){
        setError('no recipes to load');
        setIsPending(false);
        setData([]);
      } else {
        let results = [];
        snapshot.docs.forEach( (doc) => {
          results.push({ id: doc.id, ...doc.data() })
          console.log(results);
        })
        setData(results);
        console.log(data);
          setIsPending(false);
      }
    }, (err) => {
      setError(err.message);
      setIsPending(false);
    })
    return () => unsub();
  }, []);

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p> }
      {data && <Recipe recipes={data} />}
    </div>
  )
}

export default Home
