import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Search from "./components/Search";
import Footer from './components/Footer';
import RecipeDetails from './components/RecipeDetails';
import Homepage from './components/Homepage';
import FeaturedPage from './components/FeaturedPage';
import LatestPage from './components/LatestPage';
import AboutPage from './components/AboutPage';
import Category from './components/Category';
import CategoryPage from './components/CategoryPage';



function App() {

  return (
    <Router>
    <div className="App">
      <header className=""><Navbar /></header>
      <main>
        {/* <Search /> */}
        {/* <LandingPage /> */}
          
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/search" exact component={Search} />
            <Route path="/featured" exact component={FeaturedPage} />
            <Route path="/latest" exact component={LatestPage} />
            <Route path="/category/:name" exact component={CategoryPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/recipe/:id" exact component={RecipeDetails}/>
          </Switch>

      </main>
      <footer className="static bottom-0"><Footer /></footer>
      </div>
      </Router>
  );
}

export default App;
