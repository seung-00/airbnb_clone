import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from '@/container/search/SearchForm';
import Footer from '@/components/base/Footer/Footer';
import LandingPage from '@/pages/LandingPage/LandingPage';

const App = () => {
  return (
    <>
      <SearchForm />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
