import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "../src/components/NavBar";

import { Loading } from "./components/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const User = React.lazy(() => import("./pages/User"));
const Question = React.lazy(() => import("./pages/Question"));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <NavBar></NavBar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/question" element={<Question />} />
          </Routes>
        </main>
      </Router>
    </React.Suspense>
  );
}

export default App;
