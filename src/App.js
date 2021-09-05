import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
// import Search from "./components/Search";
import Footer from './components/Footer';
import Featured from './components/Featured';
import RecipeDetails from './components/RecipeDetails';



function App() {

  return (
    <Router>
    <div className="App">
      <header><Navbar /></header>
      <main>
        {/* <Search /> */}

          {/* <Featured /> */}
          {/* <RecipeDetails /> */}
          
          <Switch>
            <Route path="/feature" exact component={Featured} />
            <Route path="/recipe" exact component={RecipeDetails}/>
            {/* <Route exact path="/recipe">
            <RecipeDetails />
            </Route> */}
          </Switch>

      </main>
      <footer className="static "><Footer /></footer>
      </div>
      </Router>
  );
}

export default App;
