import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashbord from './Dashbord';
import Commandes from './Commandes';
import EtatStock from './EtatStock';
import Navigation from '../../components/NavBar/Navigation';

function Home() {
    return (
        <div>
           
      <BrowserRouter>
      <Navigation/>
      <Switch>
          <Route exact path='/dashboard/dashboard'  component={Dashbord} />
          <Route exact path='/dashboard/commandes' component={Commandes} />
          {/* <Route path="/dashboard/getCommandById/:id"><ProductUser/></Route> */}
          <Route exact path='/dashboard/etat de stock' component={EtatStock} />
        </Switch>
      </BrowserRouter> 
        </div>
    )
}

export default Home
