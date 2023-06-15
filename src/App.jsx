import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Feats from './components/Feats/Feats'

function App() {
  return (
    <div className="App">
      <Introduction />
      <Skills />
      <Feats />
      <ContactMe />
    </div>
  );
}

export default App;
