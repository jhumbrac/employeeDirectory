import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Enemies from './pages/Enemies';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Enemies" component={Enemies} />
        <Route exact path="/Catering" component={Catering} />
        <Route exact path="/Contact" component={Contact} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
