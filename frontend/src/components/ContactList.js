import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  // Render the list of contacts
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id} // Using contact id as the unique key
      />
    );
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
