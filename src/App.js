import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '@/components/base/Footer/Footer';
import LandingPage from '@/pages/LandingPage/LandingPage';
import NavBar from './components/base/NavBar/NabBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
