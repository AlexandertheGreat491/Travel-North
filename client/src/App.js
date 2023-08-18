//imports react
import React, {useState} from "react";

//imports components
import Header from "./components/Header";

//imports pages
//imports the NoMatch page
import NoMatch from "./pages/NoMatch";

//imports the Home page
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Explore from "./pages/Explore";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [options] = useState([{name: "Travel"}]);
  const [currentOption, setOption] = useState(options[0]);
  

  return (
    <Router>
    <div>
      <Header
      options={options}
      setOption={setOption}
      currentOption={currentOption}
      />
      <div>
        <Routes>
        <Route
            path="/"
            element={<Home
            options={options}
            setOption={setOption}
            currentOption={currentOption}
               />}
          />
          <Route path="/Travel" element={<Travel/>} />
          <Route path="/Explore" element={<Explore/>}/>
          <Route
          path="*"
          element={<NoMatch/>}
          />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;