import React from "react";
import { useLocation,Link } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state || {}; // Safely retrieve contact, handle undefined
  //console.log(contact);
  
  if (!contact) {
    return <div>Contact not found!</div>; // Handle the case where contact is not available
  }

  return (
    <div className="main">
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {`${contact.firstname} ${contact.lastname}`}</p>
      <p><strong>Phone:</strong> {contact.number}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <Link to="/new-message" state={{ contact }}>
        <button className="ui button blue">Send Message</button>
      </Link>
      {/* <button className="ui button blue">Send Message</button> */}
    </div>
  );
};

export default ContactDetail;
