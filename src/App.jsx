import { useState } from 'react'
import './App.css'
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/serchBox/SearchBox'
import { ContactList } from './components/contactList/ContactList'
import contactsData from '../contscts.json'

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [filteredInfo, setFilteredInfo] = useState('');

  const filteredList = contacts.filter((contact) => contact.name.toLowerCase().includes(filteredInfo.toLowerCase().trim()));

  return (
    <div className='mainContainer'>
      <h1 className='mainTitle'>Phonebook</h1>
      <ContactForm />
      <SearchBox
        filteredInfo={filteredInfo}
        setFilteredInfo={setFilteredInfo} />
      <ContactList
        filteredList={filteredList} />
    </div>
  )
}

export default App
