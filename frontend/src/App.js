import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const History = () => (
  <div>
    <h2>History</h2>
  </div>
)

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

      <Route exact path="/" component={Home} />
      <Route exact path="/history" component={History} />
    </div>
  </Router>
)

export default App;
