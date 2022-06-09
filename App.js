import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Update from "./pages/Update";
import Top from "./Top";

function App() {
  return (
    <div className="App" content="initial-scale=1, width=device-width">
      <Top />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<Write />} />
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
