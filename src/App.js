import React, { Compoent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
