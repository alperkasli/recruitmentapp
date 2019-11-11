import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import AddCandidate from './components/AddCandidate'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/recruitmentapp" component={Home} />
          <Route exact path="/recruitmentapp/new-candidate" component={AddCandidate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
