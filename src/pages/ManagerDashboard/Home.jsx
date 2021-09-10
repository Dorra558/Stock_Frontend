import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashbord from './Dashbord';
import Commandes from './Commandes';
import EtatStock from './EtatStock';
import Navigation from '../../components/NavBar/Navigation';
import LogOut from './logOut';

function Home() {
    return (
        <div>
           
      <Router>
      <Navigation/>
      
          <Route exact path='/dashboard/dashboard'  component={Dashbord} />
          <Route exact path='/dashboard/commandes' component={Commandes} />
          {/* <Route path="/dashboard/getCommandById/:id"><ProductUser/></Route> */}
          <Route exact path='/dashboard/etat de stock' component={EtatStock} />
          <Route exact path='/login' component={LogOut} />
       
      </Router> 
        </div>
    )
}

export default Home
