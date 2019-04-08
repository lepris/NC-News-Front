import React, { Component } from 'react';
import './App.css';
import { Router, Link } from '@reach/router'
import Homeview from './components/HomeView'
import SingleArticleView from './components/SingleArticleView';
import LoginBox from './components/LoginBox';
import AddArticle from './components/AddArticle';
import { Erroneous } from './components/Erroneous';

class App extends Component {
  state = {
    username: '',
    topic: '',
  }
  userLogin = (username) => {
    this.setState({ username })
  }


  render() {
    return (
      <div className="App">
        <nav>

          <Link to='/'><button>All Articles</button></Link>
          {!this.state.username && <LoginBox userLogin={this.userLogin} />}
          {this.state.username && <h5>Logged in as {this.state.username}
            <Link to='/articles/add'> <i className="fas fa-pencil-alt"></i>Add Article</Link></h5>}
        </nav>

        <Router className='App-main-route'  >
          <AddArticle username={this.state.username} path='/articles/add' />
          <Homeview path='/' />
          <Erroneous path='/404' />
          <Homeview topic={this.props.topic} path='/topics/:topic' />
          <SingleArticleView username={this.state.username} path='/articles/:article_id' />
        </Router>
      </div>
    );
  }
}

export default App;
