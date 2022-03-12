import { Link } from 'react-router-dom';

//  Style
import './Navbar.css';
import Searchbar from './Searchbar';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>

        <Link to='/' className='brand'>
          <h1>Cook Book</h1>
        
        </Link>
        <Searchbar />
        <Link to="/create">
          <p>Create Recipe</p>
        </Link>

      </nav>
    </div>
  )
}
