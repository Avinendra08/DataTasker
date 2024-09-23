import React from "react";
import "./App.css";
import Header from "./Header";
import MainMenu from "./MainMenu";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import NewMessage from "./NewMessage";
// Sample contact data
const contacts = [
  {
    id: 1,
    firstName: "Avi",
    lastName: "Singh",
    phone: "7007993890"
  },
  {
    id: 2,
    firstName: "Bachchi",
    lastName: "Singh",
    phone: "7307555232"
  },
];

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/contactlist" element={<ContactList contacts={contacts} />} />
          <Route path="/contact/:id" element={<ContactDetail/>} />
          <Route path="/new-message" element={<NewMessage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
