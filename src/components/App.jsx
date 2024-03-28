import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";

import "./App.scss";

function App() {
  const [RESTAPI_URL] = useState("https://whiterabbitsbox.com.ua/wp-json/v2/")

  return (
    <>
      <Routes>
        <Route path="/" element={<Main urlAPI={RESTAPI_URL} />} />
        <Route path="/pro-nas" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
