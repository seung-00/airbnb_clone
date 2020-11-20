import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '@/components/base/Footer/Footer';
import LandingPage from '@/components/pages/LandingPage/LandingPage';
import StayPage from '@/components/pages/StayPage/StayPage';
import ExperiencePage from '@/components/pages/ExperiencePage/ExperiencePage';
import NavBar from './components/base/NavBar/NabBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search-stay" component={StayPage} />
        <Route path="/search-experience" component={ExperiencePage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
