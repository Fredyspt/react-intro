import React, { Component } from 'react';

import './styles/BadgeList.css'

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
      {this.props.badges.map((badge) => {
        return (
          <li key={badge.id} className="BadgeList__item">
            <div className="BadgeList__container">
              <img src={badge.avatarUrl} className="BadgeList__item-img" alt="Avatar" />
              <div className="BadgeList__item-info">
                <ul className="list-unstyled">
                  <li><strong>{badge.firstName} {badge.lastName}</strong></li>
                  <li className="BadgeList__item-twitter">@{badge.twitter}</li>
                  <li>{badge.jobTitle}</li>
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    )
  }
}

export default BadgesList;