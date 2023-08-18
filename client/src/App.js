import React, {useState} from "react";

import Header from "./components/Header";

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
          <Route path="/travel" element={<Travel/>} />
          <Route path="/AllTravel" element={<AllTravel/>}/>
          <Route path="/Boarding" element={<Boarding/>}/>
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