import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';

import './styles/BadgeList.css'

class BadgesList extends Component {
  render() {
    if(this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create a new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
      {this.props.badges.map((badge) => {
        return (
          <li key={badge.id} className="BadgeList__item">
            <div className="BadgeList__container">
              <Gravatar 
                className="BadgeList__item-img"
                email={badge.email}
              />
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