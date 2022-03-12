import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Page Components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';

import './App.css'

function App() {
  // Pages and Router Setup
    // Create four different components that make our four 'pages'
    // Import react router, Route, switch etc and the components 
    // Setup the routes in App.js

  // Making Navbar component
    // Create Nav component and place it inside browserrouter but above all the routes so its present on all pages

  // Fetching Data
    // import the useFetch custom hook and setting up our HTML w/ conditionals
  
  // Recipe Component
    // Will create a seperte component for recipes and nest it inside Home component's map function
    // This is done so it is re-usable elsewhere

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

        <Switch>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>

          <Route path="/recipes/:id">
            <Recipe/>
          </Route>

        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App
