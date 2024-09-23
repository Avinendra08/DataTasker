import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contact = location.state?.contact;

  const [otp] = useState(Math.floor(100000 + Math.random() * 900000)); // Generate a random 6-digit OTP
  const [message, setMessage] = useState(`Hi. Your OTP is: ${otp}`); // Set the message with the OTP

  if (!contact) {
    return <div>Contact not found!</div>; 
  }

  const handleSend = () => {
    // Placeholder for sending the SMS
    console.log(`Sending message to ${contact.phone}: ${message}`);
    // Here, you'll later call your API to send the SMS
    // axios.post('/api/send-sms', { phone: contact.phone, message })
    //   .then(response => {
    //     console.log("Message sent:", response.data);
    //     // Redirect or show success message
    //   })
    //   .catch(error => {
    //     console.error("Error sending message:", error);
    //   });

    // Navigate back to contact list or show a success message
    navigate("/contacts");
  };

  return (
    <div className="ui container">
      <h2>Send Message to {contact.name}</h2>
      <div className="ui form">
        <div className="field">
          <label>Message</label>
          <textarea
            rows="4"
            value={message}
            readOnly // Make it read-only, as it's auto-generated
          />
        </div>
        <button className="ui button blue" onClick={handleSend}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
