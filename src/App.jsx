import "./App.css";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contact, SetContact] = useState(() =>
    JSON.parse(localStorage.getItem("saved-contact"))
  );

  useEffect(() =>
    localStorage.setItem("saved-contact", JSON.stringify(contact))
  );

  const addContact = (newContact) => {
    SetContact((prevContact) => [...prevContact, newContact]);
  };

  const deleteContact = (contactId) => {
    SetContact((prevContact) =>
      prevContact.filter((contact) => contact.id !== contactId)
    );
  };

  const [search, SetSearch] = useState("");

  const searchedContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="general-container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={SetSearch} />
      <ContactList contact={searchedContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
