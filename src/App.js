import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '@/components/base/NavBar/NavBar';
import Footer from '@/components/base/Footer/Footer';
import LandingPage from '@/pages/LandingPage/LandingPage';

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
