import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Search from "./components/Search";
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

          
          <Switch>
            <Route path="/search" exact component={Search} />
            {/* <Route path="/feature" exact component={Featured} /> */}
            <Route path="/recipe/:id" exact component={RecipeDetails}/>
          </Switch>

      </main>
      <footer className="static "><Footer /></footer>
      </div>
      </Router>
  );
}

export default App;
