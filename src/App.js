import './App.css';
import Navbar from "./Components/Navbar/Navbar.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div>
        <Main/>
      </div>
      {/* <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
