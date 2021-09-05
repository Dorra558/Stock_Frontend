
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginForm from './components/LoginForm/LoginForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
    
      <Switch>
          <Route exact path='/login' exact component={LoginForm} />
           <Route exact path='/dashboard' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
