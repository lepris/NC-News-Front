import React, { Component } from 'react';
import './App.css';
import './Layout.css';
import './MobileLayout.css';

import { LeftTopicsPanel } from './components/layout/LeftTopicsPanel';
import { TopBar } from './components/layout/TopBar';
import { MainRouter } from './components/layout/MainRouter';

class App extends Component {

  state = {
    username: '',
    topic: '',
    device: 'desktop',
  }
  userLogin = (username) => {
    this.setState({ username })
  }

  handleWindowResize = () => {
    const breakpoints = {
      desktop: 1024,
      tablet: 768,
    }
    if (window.innerWidth > breakpoints.desktop) {
      this.setState({ device: 'desktop' })
    }
    else if (window.innerWidth < breakpoints.desktop && window.innerWidth > breakpoints.tablet) {
      this.setState({ device: 'tablet' })
    }
    else if (window.innerWidth < breakpoints.tablet) {
      this.setState({ device: 'mobile' })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }


  render() {

    return (

      <div className="App">
        {console.log('place for device App ', this.state.device)}
        <div className="TopPanel">
          <TopBar username={this.state.username} userLogin={this.userLogin} />
        </div>

        <div className="ContainerPanel">

          <div className="LeftPanel">


            <LeftTopicsPanel device={this.state.device} />
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
