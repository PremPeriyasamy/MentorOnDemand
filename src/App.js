// import logo from './logo.svg';
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Home/navbar";
import Home from "./Components/Home/Home";
import Loggin from "./Components/User/loggin";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Switch> */}
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Loggin />}></Route>
          {/* </Switch> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
