import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Homeview from './components/HomeView'
import SingleArticleView from './components/SingleArticleView';
import LoginBox from './components/LoginBox';

class App extends Component {
  state = {
    username: '',
    topic: '',
  }
  userLogin = (username) => {
    this.setState({ username })
  }
  chooseTopic = (topic) => {
    this.setState({ topic })
  }

  render() {
    return (
      <div className="App">
        <nav>

          <Link to='/'>Home View</Link>
          {!this.state.username && <LoginBox userLogin={this.userLogin} />}
          {this.state.username && <h5>Logged in as {this.state.username}</h5>}



        </nav>
        <Router className='App-main-route'  >
          <Homeview chooseTopic={this.chooseTopic} path='/' />
          <Homeview chooseTopic={this.chooseTopic} path='/topics/:topic' />
          <SingleArticleView username={this.state.username} path='/articles/:article_id' />
        </Router>
      </div>
    );
  }
}

export default App;
