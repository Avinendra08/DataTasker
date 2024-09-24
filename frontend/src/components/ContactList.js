import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactList = () => {
  // Render the list of contacts
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:1215/contactlist");
        //console.log(response.data.data);
        setContacts(response.data.data);
        //console.log(contacts);
         // Adjust based on your API response structure
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchContacts();
  }, []);

  if(loading){
    return <div>loading...</div>
  }

  const renderContactList = contacts.map((contact) => {
    //console.log(contact);
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




