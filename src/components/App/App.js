import './App.css';
import Header from '../Header/Header';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Basket from '../Basket/Basket';
import Main from '../Main/Main'


function App() {
  return (
    <div className="container" >
      <Header />
      <HashRouter>
        <Route path='/' exact component={Main} />
        <Route path='/destroy' component={Basket} />
        {/* <Route path='/more' component={More} /> */}
      </HashRouter>
      <footer className='footer'>2021 © Все права и планета защищены</footer>
    </div>
  );
}

export default App;
