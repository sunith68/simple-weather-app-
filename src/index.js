import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  // NavLink,
  BrowserRouter as Router,
  // Switch,
} from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './components/main/Home'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <App/>
    <div>
      <Route path="/" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();
