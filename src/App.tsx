import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

///import Home from '@/views/Home';
//import Favorites from '@/views/Favorites';
import MainLayout from './layouts/MainLayout';
//import routes from '@/constants/routes';
import store from './store/store';

const App: FC = () => {
  return (
      <MainLayout/>
  );
};

export default App;