import React from 'react';
import ImagemCard from './components/Imagem/ImagemCard';
import Header from './components/HeaderFiles/Header';
import Footer from './components/HeaderFiles/Footer';
import './App.css';

function App() {
  return (
    <div className="App">  
      <Header />    
      <ImagemCard />
      <Footer />        
    </div>
  );
}

export default App;
