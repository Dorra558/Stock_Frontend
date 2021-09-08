
import './App.css';
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginForm from './components/AuthForm/LoginForm';
import Home from './pages/ManagerDashboard/Home';
import HomeAdmin from './pages/AdminDashboard/HomeAdmin'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
    
      <Switch>
          <Route exact path='/login' exact component={LoginForm} />
           <Route exact path='/dashboard' component={Home} />
           <Route exact path='/admin' component={HomeAdmin} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
