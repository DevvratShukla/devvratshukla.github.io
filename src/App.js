import React, { Component } from 'react';
import image from './img/devvrat-profile-pic.jpg';
import ProfilePicture from './components/profile-picture';
import './App.css';
import Intro from './components/intro';
import SocialConnector from './components/social-connector';

class App extends Component {
  render() {
    const gitHubURL = 'https://github.com/devvratshukla';
    const linkedInURL = 'https://linkedin.com/in/devvratshukla/';
    const twitterURL = 'https://twitter.com/godevvrat';

    return (
      <div className="container app">
        <div className="row">
          <div className="col-6 bg-info">
            <div className="intro-space ">
              <ProfilePicture
                src={image}
                rotate={false}
                type="circular"
                height="350px"
                width="350px"
              />
              <br />
              <Intro text={'Hi, I am Devvrat. A full Stack Developer.'} />
              <SocialConnector
                gitHubURL={gitHubURL}
                linkedInURL={linkedInURL}
                twitterURL={twitterURL}
                iconSize={40}
                iconColor="white"
              />
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default App;
