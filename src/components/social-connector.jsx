import React, { Component } from 'react';

class SocialConnector extends Component {
  render() {
    const { iconSize, iconColor, linkedInURL, gitHubURL, twitterURL } = this.props;
    const iconStyle = {
      fontSize: iconSize,
      color: iconColor,
      cursor: 'pointer'
    };

    return (
      <div className="">
        <span className="m-2">
          <a href={linkedInURL}>
            <i style={iconStyle} className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </span>
        <span className="m-2">
          <a href={gitHubURL}>
            <i style={iconStyle} className="fa fa-github-alt" aria-hidden="true" />{' '}
          </a>
        </span>
        <span className="m-2">
          <a href={twitterURL}>
            <i style={iconStyle} className="fa fa-twitter" aria-hidden="true" />{' '}
          </a>
        </span>
      </div>
    );
  }
}

export default SocialConnector;
