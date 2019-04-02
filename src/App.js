import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Homeview from './components/HomeView'
import SingleArticleView from './components/SingleArticleView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home View</Link>

        </nav>
        <Router className='App-main-route' >
          <Homeview path='/' />
          <SingleArticleView path='/articles/:article_id' />
        </Router>
      </div>
    );
  }
}

export default App;
