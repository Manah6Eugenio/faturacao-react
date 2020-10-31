import React from 'react';
import Navbar from './componentes/Navbar';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import Rotas from './componentes/Rotas';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Rotas />
      </div>
    </div>
  );
}

export default App;