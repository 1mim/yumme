import './App.css';
import './index.css'

import Navbar from './components/Navbar';
import Search from "./components/Search"

function App() {

  return (
    <div className="App">
      <header><Navbar /></header>
      <main>
        <Search />
        </main>
    </div>
  );
}

export default App;
