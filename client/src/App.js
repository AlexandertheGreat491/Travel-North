//imports react
import React from "react";

//imports components
//imports the Header
import Header from "./components/Header";
//imports the Footer component
import Footer from "./components/Footer";

//imports pages
//imports the NoMatch page
import NoMatch from "./pages/NoMatch";

//imports the Home page
import Home from "./pages/Home";

//imports the Travel page
import Travel from "./pages/Travel";

//imports the Explore page
import Explore from "./pages/Explore";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  
  return (
    <Router>
    
      <Header
      
      />
      
        <Routes>
        <Route
            path="/"
            element={<Home
            
               />}
          />
          <Route path="/Travel" element={<Travel/>} />
          <Route path="/Explore" element={<Explore/>}/>
          <Route
          path="*"
          element={<NoMatch/>}
          />
        </Routes>
      
        <Footer/>
      
    
    </Router>
  );
}

export default App;