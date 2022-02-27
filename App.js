import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './img/sslogo.png';
import store from './img/storefront.png';
import './App.css';
import Application from './Application'
import SearchResults from './SearchResults'
//import './index.css'
import Background from './img/ssbackground.png'



class App extends Component {

  
  render() {
    return (
      <>
      <Application/>
      <SearchResults/>
      
      
      </>
      
      
    );

  }
}

export default App;
