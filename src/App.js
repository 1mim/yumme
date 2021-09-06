import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Search from "./components/Search";
import Footer from './components/Footer';
import Featured from './components/Featured';
import RecipeDetails from './components/RecipeDetails';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import FeaturedPage from './components/FeaturedPage';



function App() {

  return (
    <Router>
    <div className="App">
      <header className="sticky"><Navbar /></header>
      <main>
        {/* <Search /> */}
        {/* <LandingPage /> */}
          
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/search" exact component={Search} />
            <Route path="/featured" exact component={FeaturedPage} />
            <Route path="/recipe/:id" exact component={RecipeDetails}/>
          </Switch>

      </main>
      <footer className="static bottom-0"><Footer /></footer>
      </div>
      </Router>
  );
}

export default App;
