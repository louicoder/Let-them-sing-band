import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Header } from '../Components';
import Footer from '../Components/Footer';
import Hoc from './Hoc';
import Routes from './Routes';

const App = (props) => {
  console.log('pr spsp ', props);
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        {Routes.map(({ component, path, exact }) => (
          <Route
            key={Math.random().toString(36).slice(2)}
            exact={exact}
            path={path}
            component={() => Hoc({ component, path })}
          />
        ))}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
