import React, { Component } from 'react';
import './App.css';
import './Layout.css'

import { LeftTopicsPanel } from './components/layout/LeftTopicsPanel';
import { TopBar } from './components/layout/TopBar'
import { MainRouter } from './components/layout/MainRouter'

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
        <div className="TopPanel">
          <TopBar username={this.state.username} userLogin={this.userLogin} />
        </div>
        <div className="ContainerPanel">
          <div className="LeftPanel">
            <LeftTopicsPanel topic={this.state.topic} />
          </div>
          <div className="MainPanel">
            <MainRouter username={this.state.username} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
