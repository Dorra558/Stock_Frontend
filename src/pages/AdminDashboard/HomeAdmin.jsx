import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardAdmin from './DashboardAdmin';
import CommandesAdmin from './CommandesAdmin';
import StockAdmin from './StockAdmin';
import ManagerStock from './ManagerStock'

import NavigationAdmin from '../../components/NavBar/NavigationAdmin';

function Home() {
    return (
        <div>
           
      <Router>
      <NavigationAdmin/>
      <Switch>
          <Route exact path='/admin/dashboard'  component={DashboardAdmin} />
          <Route exact path='/admin/commandes' component={CommandesAdmin} />
          <Route exact path='/admin/etat de stock' component={StockAdmin} />
          <Route exact path='/admin/managers' component={ManagerStock} />
        </Switch>
      </Router> 
        </div>
    )
}

export default Home
