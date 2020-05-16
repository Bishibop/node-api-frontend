import React from 'react';
import { Route } from 'react-router-dom';
import Projects from './components/Projects';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <h1>
        Frontend for the Node API Sprint Challenge
      </h1>
      <Route exact path='/'>
        <Projects />
      </Route>
      <Route path='/projects/:id'>
        <Project />
      </Route>
    </div>
  );
}

export default App;
