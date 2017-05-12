import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Parser from './pages/Parser/Parser';
import History from './pages/History/History';
import ParsedInfo from './pages/Links/ParsedInfo';

import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={ Parser } />
        <Route path="/history" component={ History } />
        <Route path="/links/:id" component={ ParsedInfo } />
      </Switch>
    </div>
  </Router>
)

export default App;
