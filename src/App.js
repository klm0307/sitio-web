<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "../src/components/NavBar";

import {Home} from "./pages/Home";
import Question from "./pages/Question";
import User from "./pages/User";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </Router>
    </>
=======
import React from 'react';
import './App.css';
import {NavBar} from '../src/components/NavBar'
function App() {
  return (
<React.Fragment>
   <NavBar></NavBar>
</React.Fragment>
>>>>>>> origin/master
  );
}

export default App;
