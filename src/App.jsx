
import './App.css';
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginForm from './components/AuthForm/LoginForm';
import Home from './pages/ManagerDashboard/Home';
import HomeAdmin from './pages/AdminDashboard/HomeAdmin'
// import ManagerRoute from './components/privateRoutes/managerRoute';
import Dashbord from './pages/ManagerDashboard/Dashbord';
import AdminRoute from './components/privateRoutes/adminRoute';
import DashboardAdmin from './pages/AdminDashboard/DashboardAdmin';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
            <Route exact path='/' exact component={LoginForm} />
            <Route exact path='/dashboard' component={Home} />
            <Route exact path='/admin' component={HomeAdmin} />
            {/* <ManagerRoute path="/dashboard" exact component={Dashbord}/> */}
            {/* <MnagerRoute path="/dashboard" exact component={Dashbord}/> */}
            <AdminRoute path="/admin" exact component={DashboardAdmin}/>
          </Switch>
      </Router>
    </div>
  )
}

export default App;
