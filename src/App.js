
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashbord from './pages/Dashbord';
import Commandes from './pages/Commandes';
import EtatStock from './pages/EtatStock';
import Navigation from './components/NavBar/Navigation';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navigation/>
      <Switch>
          <Route path='/dashboard'  component={Dashbord} />
          <Route path='/Commandes' component={Commandes} />
          <Route path='/etat de stock' component={EtatStock} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
