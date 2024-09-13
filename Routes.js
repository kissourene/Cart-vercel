import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} />
        {/* Ajoutez d'autres routes ici */}
      </Switch>
    </Router>
  );
}

export default Routes;
