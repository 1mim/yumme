import './App.css';
import './index.css'

import Navbar from './components/Navbar';
import Search from "./components/Search";
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
      <header><Navbar /></header>
      <main>
        <Search />
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
