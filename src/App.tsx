import React from 'react';
import logo from './logo.svg';
import { Galleri } from './components/Galleri/Galleri';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Galleri  />
      </header>
    </div>
  );
}

export default App;
