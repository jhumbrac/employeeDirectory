import React, { useState } from 'react';
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
  const [page, setPage] = useState("/");
  const renderPages = page => {
    switch (page) {
      case "/":
        return <Home />;
      case "about":
        return <About />;
      case "menu":
        return <Menu />;
      case "enemies":
        return <Enemies />;
      case "catering":
        return <Catering />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  return (
    <React.Fragment>
      <Header setPage={setPage} />
      <Wrapper>
        {renderPages(page)}
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}

export default App;
