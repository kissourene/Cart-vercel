import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
