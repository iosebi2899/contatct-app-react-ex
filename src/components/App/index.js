import { useState } from "react";
import ContactList from "../ContactList";
import Modal from "../Modal";
import "./index.css";

const App = () => {
  const [modalIsOn, setModalIsOn] = useState(false);
  const contactsDefaultState = localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : [];
  const [contacts, setContacts] = useState(contactsDefaultState);
  const [contactToEdit, setContactToEdit] = useState({});

  console.log(contacts);

  return (
    <>
      <button onClick={() => setModalIsOn(true)} id="add-new-contact">
        Add Contact
      </button>
      <ContactList
        contacts={contacts}
        onSetContacts={setContacts}
        onSetModalIsOn={setModalIsOn}
        setContactToEdit={setContactToEdit}
      />
      {modalIsOn && (
        <Modal
          onSetModalIsOn={setModalIsOn}
          onSetContacts={setContacts}
          data={contactToEdit}
          onSetContactToEdit={setContactToEdit}
        />
      )}
    </>
  );
};

export default App;
