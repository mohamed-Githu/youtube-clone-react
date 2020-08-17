import React from 'react';
import './app.scss';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Videos from './components/videos/Videos';
import SearchPage from './components/searchPage/SearchPage';

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <div className="app__page">
        <SideBar className='app__sideBar' />
        <Switch>
            <Route exact path='/'>
              <Videos className='app__videos' />
            </Route>
            <Route exact path='/search/:input'>
              <SearchPage />
            </Route>
        </Switch>
      </div>
    </Router>
  </div>
)

export default App;
