import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import Products from './products/Products';
import ContactUs from './contact-us/ContactUs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
            <a className="brand-title">Demo</a>
            <Nav />
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <footer className="footer">
            &copy; 2017 Lee Jackson
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
