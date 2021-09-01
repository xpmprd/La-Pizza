import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage/HomePage';  
import { MenuPage } from './pages/MenuPage/MenuPage';

const App = () => (
  <Router>
    
    <Switch>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <Route
        exact
        path="/menu"
        component={MenuPage}
      />
      <Redirect to="/" />
    </Switch>
 
  </Router>
);

export default App;
