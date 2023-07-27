import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={AboutMe} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App
