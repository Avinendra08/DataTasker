// MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className='ui main'>
      <h2>Main Menu</h2>
      <div className="ui list">
        <div className="item">
          <i className="address book icon"></i>
          <div className="content">
            <Link to="/contactlist">
              List of Contacts
            </Link>
          </div>
        </div>

        <div className="item">
          <i className="envelope outline icon"></i>
          <div className="content">
            <Link to="/messagelist">
              List of Sent Messages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
