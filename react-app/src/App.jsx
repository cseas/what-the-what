import { Routes, Route } from "react-router-dom";

import { Login } from "./Login/Login";
import { Home } from "./Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
