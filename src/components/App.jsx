import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";

import Main from "../pages/Main";
import About from "../pages/About";

import Footer from "../components/Footer/Footer";

import { HOME, ABOUT } from "../constants";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME} element={<Main />} />
        <Route path={ABOUT} element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
