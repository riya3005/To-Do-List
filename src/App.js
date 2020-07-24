import React from 'react';
import './App.css';
import ListTitle from './Components/ListTitle';
import { Route, Switch } from 'react-router-dom';

import Layout from './Components/Layout';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/list" exact component={ListTitle} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
