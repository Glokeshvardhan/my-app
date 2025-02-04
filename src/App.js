import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes both Bootstrap CSS and JS


import './App.css';

import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Header from "./Header";
import Routing from "./Routing";




function App() {
  return (
    <div className="App">
      
       <Header/>
       <Routing/>
       <Footer/>
    
      
    </div>
  ); 
}

export default App;
