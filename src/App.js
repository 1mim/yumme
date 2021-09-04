import './App.css';
import './index.css'

import Navbar from './components/Navbar';
import Search from "./components/Search";
import Footer from './components/Footer';
import Featured from './components/Featured';



function App() {

  return (
    <div className="App">
      <header><Navbar /></header>
      <main>
        {/* <Search /> */}

        <Featured />
      </main>
      <footer className="static "><Footer /></footer>
    </div>
  );
}

export default App;
