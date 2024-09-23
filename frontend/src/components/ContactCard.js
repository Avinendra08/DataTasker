import React from "react";
import { Link } from "react-router-dom";
import userImage from "../Images/user.png"; // Placeholder image for contacts

const ContactCard = ({ contact }) => {
  const { id, firstName, lastName, phone } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={userImage} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact }}>
          <div className="header">{`${firstName} ${lastName}`}</div>
          <div>{phone}</div>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
