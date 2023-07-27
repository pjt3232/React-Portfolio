import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/Portfolio" Component={Portfolio} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Resume" Component={Resume} />
          <Route exact path="/" Component={AboutMe} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App
