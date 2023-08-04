import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css'; // Import your custom CSS file

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
